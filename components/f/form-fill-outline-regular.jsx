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

.nzpsuduik {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.s09hy0b0y {
  d: path("M7 11h10");
}

.tu0fdo1xi {
  d: path("M7 7h10");
}

.xod95u6ba {
  d: path("m7 16 2 2 4 -4");
}
</style><g class="nrj6p8qat"><path class="nzpsuduik"/><path class="tu0fdo1xi"/><path class="s09hy0b0y"/><path class="xod95u6ba"/></g>`,
		"fallback": "iconmind:form-fill-outline-regular",
	});
}

export default Component;
