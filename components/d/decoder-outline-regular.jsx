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
		"content": `<style>.hm5wf8bkx {
  d: path("m20 3 -6 6v6l6 6");
}

.hmleclbdj {
  d: path("m8 9 3 3 -3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t407ddc6o {
  d: path("M3 12h8");
}
</style><g class="nrj6p8qat"><path class="hm5wf8bkx"/><path class="t407ddc6o"/><path class="hmleclbdj"/></g>`,
		"fallback": "iconmind:decoder-outline-regular",
	});
}

export default Component;
