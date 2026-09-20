import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r1wtk5bnz {
  fill: currentColor;
  d: path("M16 8a2 2 0 1 1 0 4a2 2 0 0 1 0-4M2 10a.5.5 0 0 1 .5-.5h7.793L7.146 6.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708l3.147-3.146H2.5A.5.5 0 0 1 2 10");
}
</style><path class="r1wtk5bnz"/>`,
		"fallback": "fluent:arrow-step-in-right-20-filled",
	});
}

export default Component;
