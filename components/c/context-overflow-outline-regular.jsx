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
		"content": `<style>.brny0db6w {
  d: path("M14 9h8");
}

.es30axteb {
  d: path("M14 15h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zeinpjbcg {
  d: path("M2 8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="zeinpjbcg"/><path class="brny0db6w"/><path class="es30axteb"/></g>`,
		"fallback": "iconmind:context-overflow-outline-regular",
	});
}

export default Component;
