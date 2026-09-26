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
		"content": `<style>.xmcxdubgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 19H14C16.7614 19 19 16.7614 19 14C19 11.2386 16.7614 9 14 9H6M10 5L5.18766 8.60957C4.93745 8.80973 4.93745 9.19027 5.18766 9.39043L10 13");
}
</style><path class="xmcxdubgm"/>`,
		"fallback": "keyline-icons:arrow-u-turn-left-duotone",
	});
}

export default Component;
