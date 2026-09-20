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
		"content": `<style>.brjpv3b7t {
  d: path("M17.5 6.5V11");
}

.enrpg0aoq {
  d: path("M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.icp673bbo {
  d: path("M12 9v3");
}

.okud9xj_d {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.raivi4yli {
  d: path("M17.5 13v4.5");
}

.tbr41ebiu {
  d: path("M12 12h2.5");
}
</style><g class="hntgybcog"><path class="okud9xj_d"/><path class="brjpv3b7t"/><path class="raivi4yli"/><path class="enrpg0aoq"/><path class="icp673bbo"/><path class="tbr41ebiu"/></g>`,
		"fallback": "iconmind:flight-delay-outline-thin",
	});
}

export default Component;
