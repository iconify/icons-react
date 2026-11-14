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
		"content": `<style>.gtg72fbwi {
  d: path("m15 14.5l6.5 3.5l-6.5 3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yh3mxebwq {
  d: path("M12.2 21H3V2.5h14v9.9M6.5 7h7");
}
</style><g class="ulnmmdpxh"><path class="yh3mxebwq"/><path class="gtg72fbwi"/></g>`,
		"fallback": "uix-sharp:inference-server",
	});
}

export default Component;
