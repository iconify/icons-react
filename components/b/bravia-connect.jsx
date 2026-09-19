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
		"content": `<style>.fooxgwb1q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.166 42.5V24c0-6.811-5.521-12.333-12.333-12.333S5.5 17.189 5.5 24v18.5h37v-37H17.833v24.667H42.5m-24.667 0L5.5 42.5");
}
</style><path class="fooxgwb1q"/>`,
		"fallback": "arcticons:bravia-connect",
	});
}

export default Component;
