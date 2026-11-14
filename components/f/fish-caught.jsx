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
		"content": `<style>.blm34sbft {
  d: path("M14 2v4a2 2 0 0 1-4 0V4.5");
}

.c9fsc825f {
  d: path("M12 8c4.25 2.25 4.25 7.25 0 9.5l3.25 4h-6.5l3.25-4c-4.25-2.25-4.25-7.25 0-9.5Zm0 3.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="blm34sbft"/><path class="c9fsc825f"/></g>`,
		"fallback": "uix-sharp:fish-caught",
	});
}

export default Component;
