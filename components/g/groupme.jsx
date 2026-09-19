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
		"content": `<style>.ihbd2vb-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.9 6.594v19.377m8.2-19.377v19.377m5.589-13.788H14.312m19.377 8.2H14.312M4.5 22.123a19.5 19.5 0 0 0 18.403 19.253A19.5 19.5 0 0 0 43.5 22.122");
}
</style><path class="ihbd2vb-r"/>`,
		"fallback": "arcticons:groupme",
	});
}

export default Component;
