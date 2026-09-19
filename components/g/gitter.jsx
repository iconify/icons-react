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
		"content": `<style>.msr1t-brx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.65 4.5v22.34m7.57-14.75V43.5m7.56 0V12.09m7.57 0v14.75");
}
</style><path class="msr1t-brx"/>`,
		"fallback": "arcticons:gitter",
	});
}

export default Component;
