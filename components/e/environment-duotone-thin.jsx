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
		"content": `<style>.azyfb8wgh {
  d: path("m4 12 8 -8 8 8v8H4Z");
}

.fmlaifbpn {
  d: path("M12 16v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mhel7mbpa {
  fill: currentColor;
  d: path("m4 12 8 -8 8 8v8H4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="mhel7mbpa"/><path class="azyfb8wgh"/><path class="fmlaifbpn"/></g>`,
		"fallback": "iconmind:environment-duotone-thin",
	});
}

export default Component;
