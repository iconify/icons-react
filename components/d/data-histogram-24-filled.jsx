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
		"content": `<style>.qk7i0m-6f {
  fill: currentColor;
  d: path("M7.5 10v11H3.75a.75.75 0 0 1-.75-.75v-8A2.25 2.25 0 0 1 5.25 10zm5.25-7A2.25 2.25 0 0 1 15 5.25V21H9V5.25A2.25 2.25 0 0 1 11.25 3zm6 4A2.25 2.25 0 0 1 21 9.25v11a.75.75 0 0 1-.75.75H16.5V7z");
}
</style><path class="qk7i0m-6f"/>`,
		"fallback": "fluent:data-histogram-24-filled",
	});
}

export default Component;
