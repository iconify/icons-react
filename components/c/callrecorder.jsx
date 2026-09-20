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
		"content": `<style>.aiaq-29df {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.41 4.5a7.51 7.51 0 0 1 7.52 7.5v10a7.53 7.53 0 1 1-15 0V12a7.52 7.52 0 0 1 7.48-7.5M4 22.08h7.86a13.56 13.56 0 0 0 13.55 13.56v7.86A21.42 21.42 0 0 1 4 22.08");
}
</style><path class="aiaq-29df"/>`,
		"fallback": "arcticons:callrecorder",
	});
}

export default Component;
