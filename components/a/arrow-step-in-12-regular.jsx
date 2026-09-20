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
		"content": `<style>.uzf9rwvcl {
  fill: currentColor;
  d: path("M6 1a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 1 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L5.5 5.293V1.5A.5.5 0 0 1 6 1m1.5 8.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0");
}
</style><path class="uzf9rwvcl"/>`,
		"fallback": "fluent:arrow-step-in-12-regular",
	});
}

export default Component;
