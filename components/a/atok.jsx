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
		"content": `<style>.hswxaqbai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.5 31.019L17.85 4.5h7.9l13.75 39h-9.75L16.925 7.123");
}
</style><path class="hswxaqbai"/>`,
		"fallback": "arcticons:atok",
	});
}

export default Component;
