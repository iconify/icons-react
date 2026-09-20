import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.adh36vb4w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.25 26.538c0-3.988-3.262-7.25-7.25-7.25s-7.25 3.262-7.25 7.25v4.712c0 3.988 3.263 7.25 7.25 7.25s7.25-3.262 7.25-7.25m0 7.25v-29");
}

.c2xrbabwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 19.6v18.9a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4z");
}
</style><path class="adh36vb4w"/><path class="c2xrbabwq"/>`,
		"fallback": "arcticons:daraz",
	});
}

export default Component;
