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
		"content": `<style>.c8qlky8hn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3.07 28.92C5.3 38.43 13.82 45.5 24 45.5s18.7-7.07 20.93-16.58M2.5 24h43c0-1.39-.13-2.75-.39-4.07c-.05-.29-.12-.57-.18-.85C42.7 9.57 34.18 2.5 24 2.5S5.3 9.57 3.07 19.08");
}
</style><path class="c8qlky8hn"/>`,
		"fallback": "arcticons:enlighten",
	});
}

export default Component;
