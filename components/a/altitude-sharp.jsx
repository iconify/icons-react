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
		"content": `<style>.t99v2obmp {
  fill: currentColor;
  d: path("M18.5 12V7.108l-2.1 2.08l-.688-.688L19 5.212L22.288 8.5l-.688.714l-2.1-2.1V12zM2.904 20.192l4.192-5.615l3.462 4.615l.792-.604l-1.523-2.03l4.27-5.712l7 9.346z");
}
</style><path class="t99v2obmp"/>`,
		"fallback": "material-symbols-light:altitude-sharp",
	});
}

export default Component;
