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
		"content": `<style>.itcc67bhg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.175 21.527a2.413 2.413 0 0 1-4.825 0a2.414 2.414 0 0 1 4.825 0m14.475 0a2.413 2.413 0 0 1-4.825 0c0-1.33 1.081-2.412 2.412-2.412s2.413 1.081 2.413 2.412M18.773 29.63c1.033-.513 3.204-.83 5.502-.803c2.11.024 4.013.333 4.952.802M13.546 14.35l5.629 3.217m15.279-3.217l-5.629 3.217");
}

.l6cd208_p {
  cx: 24px;
  cy: 24px;
  r: 18.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="itcc67bhg"/><circle class="l6cd208_p"/>`,
		"fallback": "arcticons:emoji-face-angry",
	});
}

export default Component;
