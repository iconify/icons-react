import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kttsq8-fl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.182 11.59H43.5v24.82h-5.318A12.41 12.41 0 0 1 25.772 24a12.41 12.41 0 0 1 12.41-12.41M9.818 36.41H4.5V11.59h5.318A12.41 12.41 0 0 1 22.227 24a12.41 12.41 0 0 1-12.41 12.41");
}
</style><path class="kttsq8-fl"/>`,
		"fallback": "arcticons:dolby",
	});
}

export default Component;
