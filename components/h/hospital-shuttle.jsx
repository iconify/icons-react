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
		"content": `<style>.ergsilb2i {
  d: path("M2.5 15.9V7c0-1.1.9-2 2-2h12c1.5 0 2.5.75 3 2l2 4.5V15c0 .402-.12.777-.326 1.091M12.443 17h-1.4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y3wwn1bez {
  d: path("M16.5 5v6h4.75M6.5 8v5.5M11 8v5.5m-4.5-2.75H11M4.5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="ergsilb2i"/><path class="y3wwn1bez"/></g>`,
		"fallback": "uix:hospital-shuttle",
	});
}

export default Component;
