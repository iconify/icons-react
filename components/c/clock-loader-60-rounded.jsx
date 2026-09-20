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
		"content": `<style>.zou13md6v {
  fill: currentColor;
  d: path("M8.1 21.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788m-1.775-3.537L12 12V4Q8.65 4 6.325 6.325T4 12q0 1.6.6 3.075t1.725 2.6");
}
</style><path class="zou13md6v"/>`,
		"fallback": "material-symbols:clock-loader-60-rounded",
	});
}

export default Component;
