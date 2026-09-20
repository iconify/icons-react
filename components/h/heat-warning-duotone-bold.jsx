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
		"content": `<style>.l48yz708p {
  fill: currentColor;
  d: path("M12 3.5 21.5 20h-19Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u3s-f_buj {
  d: path("M8.5 14a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.uweslxo3x {
  d: path("M12 3.5 21.5 20h-19Z");
}

.ytze6sbiz {
  fill: currentColor;
  d: path("M8.5 14a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="l48yz708p"/><path class="ytze6sbiz"/><path class="uweslxo3x"/><path class="u3s-f_buj"/></g>`,
		"fallback": "iconmind:heat-warning-duotone-bold",
	});
}

export default Component;
