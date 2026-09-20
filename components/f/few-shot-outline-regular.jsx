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
		"content": `<style>.dcemxxfpc {
  d: path("M3 19h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q95wyyyjq {
  d: path("M3 5h8");
}

.t407ddc6o {
  d: path("M3 12h8");
}

.uv_v7wb2g {
  d: path("M14 12h5");
}

.zpl29uvhf {
  d: path("m16 9 3 3 -3 3");
}
</style><g class="nrj6p8qat"><path class="q95wyyyjq"/><path class="t407ddc6o"/><path class="dcemxxfpc"/><path class="uv_v7wb2g"/><path class="zpl29uvhf"/></g>`,
		"fallback": "iconmind:few-shot-outline-regular",
	});
}

export default Component;
