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
		"content": `<style>.fzdzbsazn {
  d: path("M16 9.5v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}

.v3qgglbcl {
  d: path("M12 9.5v5");
}

.y6lkwobxm {
  d: path("M8 9.5v5");
}
</style><g class="nrj6p8qat"><path class="ugdbidcqi"/><path class="y6lkwobxm"/><path class="v3qgglbcl"/><path class="fzdzbsazn"/></g>`,
		"fallback": "iconmind:event-sourcing-agent-outline-regular",
	});
}

export default Component;
