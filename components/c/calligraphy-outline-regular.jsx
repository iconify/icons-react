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
		"content": `<style>.mqs1sybxa {
  d: path("m13 3 4 4 -7 7 -4 -4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y1sgy9_rm {
  d: path("M13 20c3 -2 6 -2 8 0");
}

.ykenr4b4h {
  d: path("m8 12 -4 4v4h4l4 -4");
}
</style><g class="nrj6p8qat"><path class="mqs1sybxa"/><path class="ykenr4b4h"/><path class="y1sgy9_rm"/></g>`,
		"fallback": "iconmind:calligraphy-outline-regular",
	});
}

export default Component;
