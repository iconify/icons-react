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
		"content": `<style>.yqti-pbbp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 3l8 7v11H4V10zm0 5a1.5 1.5 0 0 1 1.5 1.5v4.373A2.25 2.25 0 0 1 12 17.8M12 8a1.5 1.5 0 0 0-1.5 1.5v4.373A2.25 2.25 0 0 0 12 17.8");
}
</style><path class="yqti-pbbp"/>`,
		"fallback": "coolicons:house-thermometer-sharp",
	});
}

export default Component;
