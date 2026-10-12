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
		"content": `<style>.gyqer07rf {
  d: path("M12 13.6c1 2.25-1 4.5 0 7.65");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rvw8szb3j {
  d: path("m12.38 3.32l1.36 2.95q.38.82 1.27.92l3.23.39q.89.1.23.71l-2.39 2.21q-.66.61-.48 1.5l.63 3.18q.18.89-.61.45l-2.83-1.59q-.79-.44-1.58 0l-2.83 1.59q-.79.44-.61-.45L8.4 12q.18-.89-.48-1.5L5.53 8.29q-.66-.61.23-.71l3.23-.39q.89-.1 1.27-.92l1.36-2.95q.38-.82.76 0");
}
</style><g class="hntgybcog"><path class="rvw8szb3j"/><path class="gyqer07rf"/></g>`,
		"fallback": "iconoven:balloon-star",
	});
}

export default Component;
