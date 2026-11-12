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
		"content": `<style>.or0dx6bxw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 7h4l3 5h2c.613 0 1.387.774 2 2l3 6M3 4v14a2 2 0 0 0 2 2h16");
}
</style><path class="or0dx6bxw"/>`,
		"fallback": "coolicons:chart-burndown-duotone",
	});
}

export default Component;
