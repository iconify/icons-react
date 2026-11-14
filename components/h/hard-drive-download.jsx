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
		"content": `<style>.iwnnrs6eq {
  d: path("M3 12h18v8H3Z");
}

.t9mi4ob0q {
  d: path("m10 8l2 2l2-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xg45q1u9k {
  d: path("m3.5 12.5l2.5-7a1.5 1.5 0 0 1 1.5-1h9a1.5 1.5 0 0 1 1.5 1l2.5 7M7 16h.01M10 16h.01M12 6v4");
}
</style><g class="ulnmmdpxh"><path class="iwnnrs6eq"/><path class="xg45q1u9k"/><path class="t9mi4ob0q"/></g>`,
		"fallback": "uix-sharp:hard-drive-download",
	});
}

export default Component;
