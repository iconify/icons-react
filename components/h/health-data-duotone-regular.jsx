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
		"content": `<style>.moha5wbmp {
  d: path("M22 12a12.5 12.5 0 0 1 -20 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vjd5xv8hg {
  fill: currentColor;
  d: path("M9 12a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1 3 0l-3 3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vzl8cib_u {
  d: path("M9 12a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1 3 0l-3 3Z");
}

.yix-58bnj {
  d: path("M2 12a12.5 12.5 0 0 1 20 0");
}
</style><g class="nrj6p8qat"><path class="vjd5xv8hg"/><path class="yix-58bnj"/><path class="moha5wbmp"/><path class="vzl8cib_u"/></g>`,
		"fallback": "iconmind:health-data-duotone-regular",
	});
}

export default Component;
