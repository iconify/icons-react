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
		"content": `<style>.jhyjf-b9k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 18L7.2 7.2M6 18V6.5C6 6.22386 6.22386 6 6.5 6H18");
}
</style><path class="jhyjf-b9k"/>`,
		"fallback": "keyline-icons:arrow-up-left-duotone",
	});
}

export default Component;
