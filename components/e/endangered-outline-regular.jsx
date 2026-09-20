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
		"content": `<style>.aff9hemvj {
  d: path("M9 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.m_erznomk {
  d: path("M19 6v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tr__z6b9j {
  d: path("M18 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.u36itk5tb {
  d: path("M3 16a5 5 0 0 1 10 0 4 4 0 0 1 -5 4 4 4 0 0 1 -5 -4");
}

.wc595gblk {
  d: path("M4 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="wc595gblk"/><path class="aff9hemvj"/><path class="u36itk5tb"/><path class="m_erznomk"/><path class="tr__z6b9j"/></g>`,
		"fallback": "iconmind:endangered-outline-regular",
	});
}

export default Component;
