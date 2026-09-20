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
		"content": `<style>.jlpxneb5g {
  d: path("M9 8v8");
}

.n5662cbho {
  fill: currentColor;
  d: path("m6 9 3 3 -3 3 -3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tee3b-ble {
  d: path("M10 12h11");
}

.tenhr0_oh {
  d: path("m6 9 3 3 -3 3 -3 -3Z");
}
</style><g class="nrj6p8qat"><path class="n5662cbho"/><path class="tenhr0_oh"/><path class="tee3b-ble"/><path class="jlpxneb5g"/></g>`,
		"fallback": "iconmind:breakpoint-conditional-duotone-regular",
	});
}

export default Component;
