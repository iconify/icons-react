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
		"content": `<style>.ghl-fb90s {
  d: path("M12 10.5v7m-3.5 0 7 -7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l48yz708p {
  fill: currentColor;
  d: path("M12 3.5 21.5 20h-19Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.uweslxo3x {
  d: path("M12 3.5 21.5 20h-19Z");
}
</style><g class="hntgybcog"><path class="l48yz708p"/><path class="uweslxo3x"/><path class="ghl-fb90s"/></g>`,
		"fallback": "iconmind:frost-warning-duotone-thin",
	});
}

export default Component;
