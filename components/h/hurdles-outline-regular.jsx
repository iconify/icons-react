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
		"content": `<style>.dznv025mt {
  d: path("M6 14h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pb147jbda {
  d: path("M6 8v12");
}

.vhnbtvbtn {
  d: path("M3 8h18");
}

.wfoy3xxos {
  d: path("M18 8v12");
}
</style><g class="nrj6p8qat"><path class="vhnbtvbtn"/><path class="pb147jbda"/><path class="wfoy3xxos"/><path class="dznv025mt"/></g>`,
		"fallback": "iconmind:hurdles-outline-regular",
	});
}

export default Component;
