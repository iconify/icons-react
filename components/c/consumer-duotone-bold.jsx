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
		"content": `<style>.jcwhwvnse {
  d: path("M12.24 16.24a6 6 0 1 1 0 -8.5");
}

.l3ca9u8kt {
  d: path("M17 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.mti18-d5p {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12.24 16.24a6 6 0 1 1 0 -8.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rxwr8htky {
  fill: currentColor;
  d: path("M17 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="rxwr8htky"/><path class="mti18-d5p"/><path class="jcwhwvnse"/><path class="l3ca9u8kt"/></g>`,
		"fallback": "iconmind:consumer-duotone-bold",
	});
}

export default Component;
