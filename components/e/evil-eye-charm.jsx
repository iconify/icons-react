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
		"content": `<style>.iyx_wfbrs {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3v4.9m-9.25 5.6C6 6 18 6 21.25 13.5C18 21 6 21 2.75 13.5");
}

.sosl8ibaa {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 13.5h.01");
}

.wng135bew {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 13.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="iyx_wfbrs"/><path class="wng135bew"/><path class="sosl8ibaa"/></g>`,
		"fallback": "iconoven:evil-eye-charm",
	});
}

export default Component;
