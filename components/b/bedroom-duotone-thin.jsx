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
		"content": `<style>.azj37obeu {
  d: path("M12 2v10");
}

.bod4n0b3z {
  d: path("M2 18h20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qhxvxhy0o {
  d: path("M7 4a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
}

.rr18_ccge {
  d: path("M2 21v-6h20v6");
}

.tu0fdo1xi {
  d: path("M7 7h10");
}

.zncbzsqxx {
  fill: currentColor;
  d: path("M7 4a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="zncbzsqxx"/><path class="rr18_ccge"/><path class="bod4n0b3z"/><path class="qhxvxhy0o"/><path class="azj37obeu"/><path class="tu0fdo1xi"/></g>`,
		"fallback": "iconmind:bedroom-duotone-thin",
	});
}

export default Component;
