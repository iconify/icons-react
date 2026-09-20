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
		"content": `<style>.at_2ro_ru {
  fill: currentColor;
  d: path("M8 20v-6.796l-1.196 1.904l-.854-.512L12 4.885l6.03 9.711l-.853.512L16 13.223V20zm1-1h2.23v-2.77h1.54V19H15v-7.38L12 6.8l-3 4.8zm2.23-5v-1.538h1.54V14zM9 19h6z");
}
</style><path class="at_2ro_ru"/>`,
		"fallback": "material-symbols-light:bungalow-outline",
	});
}

export default Component;
