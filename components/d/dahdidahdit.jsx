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
		"content": `<style>.v99vnhpmi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.457 18.441l.766 5.62l-.765 5.498h-4.581l-.708-5.498l.71-5.62zm3.518 0l.822 5.622l-.82 5.496h-1.071l-.71-5.499l.71-5.619zm7.147 0l.766 5.62l-.765 5.498h-4.585l-.766-5.499l.768-5.619zm3.54 0l.71 5.62l-.708 5.498h-1.007l-.794-5.5l.795-5.618zM14.169 24.08H2.5m31.872 0H45.5");
}
</style><path class="v99vnhpmi"/>`,
		"fallback": "arcticons:dahdidahdit",
	});
}

export default Component;
