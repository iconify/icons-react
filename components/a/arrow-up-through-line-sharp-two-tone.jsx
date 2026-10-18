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
		"content": `<style>.vp11agbqc {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 22L12 3M7.7071 7.2929L12 3L16.2929 7.2929M2 12L9 12M15 12L22 12");
}
</style><path class="vp11agbqc"/>`,
		"fallback": "keyline-icons:arrow-up-through-line-sharp-two-tone",
	});
}

export default Component;
