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
		"content": `<style>.fqboz3btt {
  fill: currentColor;
  d: path("m8 3 9 9 -9 9Z");
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

.tgy6cdcqx {
  d: path("m8 3 9 9 -9 9Z");
}
</style><g class="nrj6p8qat"><path class="fqboz3btt"/><path class="tgy6cdcqx"/></g>`,
		"fallback": "iconmind:action-duotone-regular",
	});
}

export default Component;
