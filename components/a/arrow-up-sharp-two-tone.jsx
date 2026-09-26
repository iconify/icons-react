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
		"content": `<style>.c_ffkvbev {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.7008 12.1711L12 5L19.2992 12.1711M12 20L12 5.2698");
}
</style><path class="c_ffkvbev"/>`,
		"fallback": "keyline-icons:arrow-up-sharp-two-tone",
	});
}

export default Component;
