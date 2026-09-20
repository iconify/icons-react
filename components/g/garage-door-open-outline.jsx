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
		"content": `<style>.t95lk0d_d {
  fill: currentColor;
  d: path("M8.212 18.02V9.711h7.576v8.307v-8.307H8.212zM6 18.02h2.211V9.711h7.577v8.307H18V8.946l-6-4.619l-6 4.62zm3.096-5.558h5.808v-1.866H9.096zM12.01 7.98q.3 0 .511-.21q.21-.21.21-.52t-.21-.521t-.52-.21q-.29 0-.51.21q-.22.209-.22.52t.22.52t.52.21M5 19.02V9.634H3.437L12 3.077l8.539 6.558H19v9.384h-4.096v-5.673H9.096v5.673z");
}
</style><path class="t95lk0d_d"/>`,
		"fallback": "material-symbols-light:garage-door-open-outline",
	});
}

export default Component;
