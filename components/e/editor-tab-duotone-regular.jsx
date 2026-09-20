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

.o5fggbv0a {
  d: path("M14 7h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3v-7a3 3 0 0 1 3 -3h5");
}

.srx-_0bnf {
  fill: currentColor;
  d: path("M14 7h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3v-7a3 3 0 0 1 3 -3h5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.t9fp5jbms {
  d: path("M4 7V3h7v4");
}
</style><g class="nrj6p8qat"><path class="srx-_0bnf"/><path class="o5fggbv0a"/><path class="t9fp5jbms"/></g>`,
		"fallback": "iconmind:editor-tab-duotone-regular",
	});
}

export default Component;
