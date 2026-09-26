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
		"content": `<style>.ls4o5rx5k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 12L17.0587 12M11.1229 5L17.8261 11.5875C18.058 11.8153 18.058 12.1847 17.8261 12.4125L11.1229 19M22 5L22 19");
}
</style><path class="ls4o5rx5k"/>`,
		"fallback": "keyline-icons:arrow-right-to-line-duotone",
	});
}

export default Component;
