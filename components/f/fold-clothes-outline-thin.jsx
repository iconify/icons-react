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
		"content": `<style>.dtjohzbue {
  d: path("M5 17h14v3H5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ju4i6gx3w {
  d: path("M7 11h10v3H7Z");
}

.k-9q2cbvs {
  d: path("M5 5h14v3H5Z");
}
</style><g class="hntgybcog"><path class="k-9q2cbvs"/><path class="ju4i6gx3w"/><path class="dtjohzbue"/></g>`,
		"fallback": "iconmind:fold-clothes-outline-thin",
	});
}

export default Component;
