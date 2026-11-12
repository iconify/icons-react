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
		"content": `<style>.nstse8s_d {
  fill: currentColor;
  d: path("M4 4v15h15.382l-3-6H14a1 1 0 0 1-.857-.486L10.434 8H7a1 1 0 0 1 0-2h4c.351 0 .677.184.857.486L14.566 11H17c.379 0 .725.214.894.553l4 8A1 1 0 0 1 21 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0");
}
</style><path class="nstse8s_d"/>`,
		"fallback": "coolicons:chart-burndown-fill-sharp",
	});
}

export default Component;
