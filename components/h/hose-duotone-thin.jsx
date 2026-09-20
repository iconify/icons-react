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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kclcpsdct {
  fill: currentColor;
  d: path("M8 8h8v4H8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lbejogjbx {
  d: path("M8 10c-3 0 -4 3 -4 7");
}

.nvz2drb7k {
  d: path("M10 12v5h3");
}

.rgnpgnbjr {
  d: path("M16 10h5");
}

.s3aj37b5a {
  d: path("M8 8h8v4H8Z");
}
</style><g class="hntgybcog"><path class="kclcpsdct"/><path class="s3aj37b5a"/><path class="rgnpgnbjr"/><path class="nvz2drb7k"/><path class="lbejogjbx"/></g>`,
		"fallback": "iconmind:hose-duotone-thin",
	});
}

export default Component;
