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
		"content": `<style>.tjfuxvbtq {
  fill: currentColor;
  d: path("M6 1a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 1 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L5.5 5.293V1.5A.5.5 0 0 1 6 1m0 10a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3");
}
</style><path class="tjfuxvbtq"/>`,
		"fallback": "fluent:arrow-step-in-12-filled",
	});
}

export default Component;
