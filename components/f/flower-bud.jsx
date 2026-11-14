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
		"content": `<style>.gc2fxkbqd {
  d: path("M12 2.5c2 2.5 4.5 5 4.5 7.5a4.5 4.5 0 0 1-9 0c0-2.5 2.5-5 4.5-7.5Zm0 15v4");
}

.nm0apdcex {
  d: path("M12 17.5c-2.5 0-3.75-2.5-3.75-5m3.75 5c2.5 0 3.75-2.5 3.75-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gc2fxkbqd"/><path class="nm0apdcex"/></g>`,
		"fallback": "uix-sharp:flower-bud",
	});
}

export default Component;
