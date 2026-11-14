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
		"content": `<style>.a_all4asq {
  d: path("M3 7h18v12H3Zm2 0V4h14v3");
}

.nta6tybyw {
  d: path("M13 9.75L10 13h4l-3 3.25M5.5 19v2m13-2v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a_all4asq"/><path class="nta6tybyw"/></g>`,
		"fallback": "uix-sharp:backup-generator",
	});
}

export default Component;
