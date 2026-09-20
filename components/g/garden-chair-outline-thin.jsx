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
		"content": `<style>.aut8y9hmn {
  d: path("M7 12v7");
}

.gwt34irsi {
  d: path("M15 12v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q5jw2tb7h {
  d: path("m17 12 4 -4");
}

.rsue96bcd {
  d: path("M5 12h12");
}
</style><g class="hntgybcog"><path class="rsue96bcd"/><path class="q5jw2tb7h"/><path class="aut8y9hmn"/><path class="gwt34irsi"/></g>`,
		"fallback": "iconmind:garden-chair-outline-thin",
	});
}

export default Component;
