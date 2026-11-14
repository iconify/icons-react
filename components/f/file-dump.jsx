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

.ivx36be4o {
  d: path("M9 2.5h5l3 3v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m-5.5 14v3a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-3m-8.5-4v6");
}

.mmitn_bxa {
  d: path("m9.5 16l2.5 2.5l2.5-2.5");
}
</style><g class="hntgybcog"><path class="ivx36be4o"/><path class="mmitn_bxa"/></g>`,
		"fallback": "uix:file-dump",
	});
}

export default Component;
