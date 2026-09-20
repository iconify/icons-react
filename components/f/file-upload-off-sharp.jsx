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
		"content": `<style>.r053wvbzh {
  fill: currentColor;
  d: path("m12 5l3.539 3.539l-.708.719L12.5 6.927v2.762l-1-1V6.996l-1.02 1.02l-.747-.749zm-.5 10.577V11.5l1 1v3.077zm8.333 5.683L17.573 19H5v-4.038h1V18h10.573L2.741 4.167l.713-.713l17.092 17.092zM19 16.535l-1-1v-.573h1z");
}
</style><path class="r053wvbzh"/>`,
		"fallback": "material-symbols-light:file-upload-off-sharp",
	});
}

export default Component;
