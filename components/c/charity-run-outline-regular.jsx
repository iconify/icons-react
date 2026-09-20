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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ob5egip6a {
  d: path("m11 11 2 -2v8");
}

.u3or_dbos {
  d: path("M11 17h4");
}

.x4nz41duv {
  d: path("m3 9 5 -5h8l5 5 -4 4v7H7v-7Z");
}
</style><g class="nrj6p8qat"><path class="x4nz41duv"/><path class="ob5egip6a"/><path class="u3or_dbos"/></g>`,
		"fallback": "iconmind:charity-run-outline-regular",
	});
}

export default Component;
