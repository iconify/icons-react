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
		"content": `<style>.t_q-8mr5u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.671 36.81h13.828a4.315 4.315 0 0 0 4.324-4.306V9.824A4.315 4.315 0 0 0 37.517 5.5H16.249a4.315 4.315 0 0 0-4.324 4.306v14.39zm12.295.001v.404a5.274 5.274 0 0 1-5.263 5.285H11.462a5.274 5.274 0 0 1-5.285-5.263V17.115a5.274 5.274 0 0 1 5.262-5.286h.487");
}
</style><path class="t_q-8mr5u"/>`,
		"fallback": "arcticons:a-photowidget-app",
	});
}

export default Component;
