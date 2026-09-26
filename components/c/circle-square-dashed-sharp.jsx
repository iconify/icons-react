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
		"content": `<style>.rnk_77b9l {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 9L22 9L22 12M22 14L22 17M22 19L22 22L19 22M17 22L14 22M12 22L9 22L9 19M16 9C16 5.1339 12.8661 2 9 2C5.1339 2 2 5.1339 2 9C2 12.8661 5.1339 16 9 16C12.8661 16 16 12.8661 16 9Z");
}
</style><path class="rnk_77b9l"/>`,
		"fallback": "keyline-icons:circle-square-dashed-sharp",
	});
}

export default Component;
