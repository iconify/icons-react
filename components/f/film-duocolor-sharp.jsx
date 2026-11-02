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
		"content": `<style>.v2vefu72j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h18v18H3Zm4 0v18M17 3v18M3 8h4m-4 4h18M3 16h4m10-8h4m-4 8h4");
}
</style><path class="v2vefu72j"/>`,
		"fallback": "coolicons:film-duocolor-sharp",
	});
}

export default Component;
