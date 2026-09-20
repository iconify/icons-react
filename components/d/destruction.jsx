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
		"content": `<style>.lwuiovb8l {
  fill: currentColor;
  d: path("M5.5 20.23q-.633 0-1.066-.433T4 18.731v-3.443q0-.632.434-1.066q.433-.433 1.066-.433h13q.633 0 1.066.433q.434.434.434 1.066v3.443q0 .632-.434 1.066q-.433.434-1.066.434zm1.16-7.941l-3.621-2.1l5.095-.866l-1.393-5.048l4.263 3.044L13.6 2.77l.865 5.154l5.048-1.394l-3.025 4.263l2.647 1.496z");
}
</style><path class="lwuiovb8l"/>`,
		"fallback": "material-symbols-light:destruction",
	});
}

export default Component;
