import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gjnjb1xyh {
  fill: var(--svg-color--fff, #fff);
  d: path("M20.512 8.071c0 1.395-1.115 2.573-2.511 2.573c-1.333 0-2.511-1.209-2.511-2.573c0-1.271 1.178-2.45 2.511-2.45c1.333.001 2.511 1.148 2.511 2.45m-4.744 6.728c0-1.488.931-2.481 2.232-2.481s2.232.992 2.232 2.481v11.906c0 1.488-.93 2.48-2.232 2.48s-2.232-.992-2.232-2.48z");
}

.w4bji_bjc {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M0 4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4z");
}
</style><path class="w4bji_bjc"/><path class="gjnjb1xyh"/>`,
		"fallback": "twemoji:information",
	});
}

export default Component;
