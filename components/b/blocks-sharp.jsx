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
		"content": `<style>.bhd1bocie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7h7v7h7v7H3zm7 7v7m-7-7h7m4-11h7v7h-7Z");
}
</style><path class="bhd1bocie"/>`,
		"fallback": "coolicons:blocks-sharp",
	});
}

export default Component;
