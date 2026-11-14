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
		"content": `<style>.ewpkw_sfj {
  d: path("M15.5 16a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0Z");
}

.pvh6wmb3m {
  d: path("M3.5 5h17v15.5h-17ZM8 3v4m8-4v4M3.5 10h17m-11 3v6M8 13v2.5m3-2.5v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pvh6wmb3m"/><path class="ewpkw_sfj"/></g>`,
		"fallback": "uix-sharp:calendar-reservation",
	});
}

export default Component;
