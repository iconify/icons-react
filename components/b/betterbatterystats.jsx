import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t2bed5ijw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.5 4.5h6.67a1 1 0 0 1 1 1v3.004h4.635a2 2 0 0 1 2 2V41.5a2 2 0 0 1-2 2h-17.61a2 2 0 0 1-2-2V10.504a2 2 0 0 1 2-2H19.5V5.5a1 1 0 0 1 1-1M13.194 16h21.611M19.5 8.504h8.669M24 36.481v-13m-6.5 6.5h13");
}
</style><path class="t2bed5ijw"/>`,
		"fallback": "arcticons:betterbatterystats",
	});
}

export default Component;
