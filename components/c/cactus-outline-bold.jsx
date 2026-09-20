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
		"content": `<style>.q3dgvqbzs {
  d: path("M9 21V5h6v16Z");
}

.ri0jcjret {
  d: path("M15 15h4v-5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wcoay0fmb {
  d: path("M9 12H5V8");
}
</style><g class="s0phu2bbs"><path class="q3dgvqbzs"/><path class="wcoay0fmb"/><path class="ri0jcjret"/></g>`,
		"fallback": "iconmind:cactus-outline-bold",
	});
}

export default Component;
