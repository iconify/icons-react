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
		"content": `<style>.bp7wvvake {
  d: path("m10.033 6.456l10.143-2.717l-2.475 4.286l-6.762 1.812ZM6 15.25h12.5a2.5 3 0 0 1 0 6H6");
}

.l5-cawogc {
  d: path("M3.5 18.25a2.5 3 0 1 0 5 0a2.5 3 0 1 0-5 0Zm2.5 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9nsw17bm {
  d: path("m2.918 8.88l7.245-1.941l.776 2.898l-7.244 1.941Z");
}
</style><g class="ulnmmdpxh"><path class="y9nsw17bm"/><path class="bp7wvvake"/><path class="l5-cawogc"/></g>`,
		"fallback": "uix-sharp:bushcraft",
	});
}

export default Component;
