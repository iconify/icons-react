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
		"content": `<style>.e03jjq99j {
  d: path("M4 7h6");
}

.emvotkb4z {
  d: path("M4 20 20 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hyr-16asb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 17h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ireg5-o3k {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20 20 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m26ojxb3w {
  d: path("M14 17h6");
}

.nm1tlbreh {
  d: path("M7 4v6");
}

.ufnq54i5j {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 4v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xx5d32wor {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 7h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="ufnq54i5j"/><path class="xx5d32wor"/><path class="ireg5-o3k"/><path class="hyr-16asb"/><path class="nm1tlbreh"/><path class="e03jjq99j"/><path class="emvotkb4z"/><path class="m26ojxb3w"/></g>`,
		"fallback": "iconmind:code-diff-duotone-thin",
	});
}

export default Component;
