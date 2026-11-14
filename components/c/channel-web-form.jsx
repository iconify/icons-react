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
		"content": `<style>.o-f3ob8mp {
  d: path("M14.5 10.5h3v3h-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ytl1s2brw {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8m-9.5-13h11M6.5 12h5");
}
</style><g class="ulnmmdpxh"><path class="ytl1s2brw"/><path class="o-f3ob8mp"/></g>`,
		"fallback": "uix-sharp:channel-web-form",
	});
}

export default Component;
