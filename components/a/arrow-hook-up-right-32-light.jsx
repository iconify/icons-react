import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c7txd-bof {
  fill: currentColor;
  d: path("M19.146 5.146a.5.5 0 0 0 0 .708L24.293 11H13a7 7 0 1 0 0 14h9.5a.5.5 0 0 0 0-1H13a6 6 0 0 1 0-12h11.293l-5.147 5.146a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708l-6-6a.5.5 0 0 0-.708 0");
}
</style><path class="c7txd-bof"/>`,
		"fallback": "fluent:arrow-hook-up-right-32-light",
	});
}

export default Component;
