import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rcpajqu-p {
  fill: currentColor;
  d: path("M6 1a5 5 0 1 1 0 10A5 5 0 0 1 6 1m0 1a4 4 0 1 0 0 8a4 4 0 0 0 0-8m1.5 2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h1.793L4.146 4.854l-.064-.079a.5.5 0 0 1 .693-.693l.079.064L7 6.293V4.5a.5.5 0 0 1 .5-.5");
}
</style><path class="rcpajqu-p"/>`,
		"fallback": "fluent:arrow-circle-down-right-12-regular",
	});
}

export default Component;
