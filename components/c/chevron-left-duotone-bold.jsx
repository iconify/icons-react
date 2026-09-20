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
		"content": `<style>.al8bqmeab {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m15 5 -7 7 7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fbschg62a {
  d: path("m15 5 -7 7 7 7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="al8bqmeab"/><path class="fbschg62a"/></g>`,
		"fallback": "iconmind:chevron-left-duotone-bold",
	});
}

export default Component;
