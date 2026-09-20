import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.myj21_bjj {
  fill: currentColor;
  d: path("M3.492 14.123q-.877-.877-.877-2.123t.877-2.123T5.616 9t2.123.877T8.616 12t-.877 2.123T5.616 15q-1.247 0-2.124-.877m9.354 1.42q-1.461-1.457-1.461-3.538t1.457-3.544T16.38 7q2.082 0 3.543 1.457t1.462 3.539t-1.457 3.542T16.389 17t-3.543-1.457m6.364-.718Q20.385 13.65 20.385 12T19.21 9.175T16.385 8T13.56 9.175T12.385 12t1.175 2.825T16.385 16t2.825-1.175");
}
</style><path class="myj21_bjj"/>`,
		"fallback": "material-symbols-light:hdr-weak-sharp",
	});
}

export default Component;
