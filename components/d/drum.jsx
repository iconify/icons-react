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
		"content": `<style>.cjpm5ko7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 11H21M3 21H21M5 11V21M12 11V21M19 11V21M4 3L8 7M20 3L16 7");
}
</style><path class="cjpm5ko7q"/>`,
		"fallback": "keyline-icons:drum",
	});
}

export default Component;
