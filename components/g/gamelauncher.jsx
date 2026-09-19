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
		"content": `<style>.mjb7ug8qg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.443 6.557L28.757 19.243m12.686 0L28.757 6.557");
}

.ps0ge-28y {
  cx: 35.1px;
  cy: 35.1px;
  r: 7.4px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rju8ysfdi {
  cx: 12.9px;
  cy: 12.9px;
  r: 7.4px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.y87211knh {
  cx: 12.9px;
  cy: 35.1px;
  r: 7.4px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="rju8ysfdi"/><circle class="y87211knh"/><circle class="ps0ge-28y"/><path class="mjb7ug8qg"/>`,
		"fallback": "arcticons:gamelauncher",
	});
}

export default Component;
