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
		"content": `<style>.rgrgo3b6x {
  fill: currentColor;
  d: path("M5.25 19.5v-15h1v15zm10.662-4.661l-.689-.714l1.625-1.625H9.019v-1h7.829l-1.625-1.625l.688-.713L18.75 12zM12.096 19.5v-4.23h1v4.23zm0-10.77V4.5h1v4.23z");
}
</style><path class="rgrgo3b6x"/>`,
		"fallback": "material-symbols-light:format-text-overflow-outline",
	});
}

export default Component;
