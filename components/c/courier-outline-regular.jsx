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
		"content": `<style>.g_49w5zuo {
  d: path("M8 13v6h8v-6Z");
}

.ia4sldbfw {
  d: path("M3 21a9 9 0 0 1 18 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pemn838wn {
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.ts5ij9bsc {
  d: path("M12 13v6");
}
</style><g class="nrj6p8qat"><path class="pemn838wn"/><path class="ia4sldbfw"/><path class="g_49w5zuo"/><path class="ts5ij9bsc"/></g>`,
		"fallback": "iconmind:courier-outline-regular",
	});
}

export default Component;
