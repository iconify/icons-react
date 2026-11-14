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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ja8_zg6om {
  d: path("M6.5 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.ln-k0e6ba {
  d: path("M9.5 12L12 9.5l2.5 2.5M12 9.5V15");
}

.u07prvbqz {
  d: path("M8.75 2.5h6.5a5.25 5.25 0 0 1 5.25 5.25v8.5a5.25 5.25 0 0 1-5.25 5.25h-6.5a5.25 5.25 0 0 1-5.25-5.25v-8.5A5.25 5.25 0 0 1 8.75 2.5");
}
</style><g class="hntgybcog"><path class="u07prvbqz"/><path class="ja8_zg6om"/><path class="ln-k0e6ba"/></g>`,
		"fallback": "uix:elevator-call",
	});
}

export default Component;
