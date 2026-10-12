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
		"content": `<style>.ax0ip-bhr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.6 8.1l6.7-4.4a1.25 1.25 0 0 1 1.4 0l6.7 4.4a1 1 0 0 1 .6.92v.23a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-.23a1 1 0 0 1 .6-.92");
}

.dcnzi9b5t {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 7.25h.01");
}

.orkpmzm1a {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12.75v5m3.75-5v5m3.5-5v5m3.75-5v5M3.75 20.5h16.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ax0ip-bhr"/><path class="dcnzi9b5t"/><path class="orkpmzm1a"/></g>`,
		"fallback": "iconoven:bank",
	});
}

export default Component;
