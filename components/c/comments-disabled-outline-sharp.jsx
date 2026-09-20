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
		"content": `<style>.xc2z_8ywa {
  fill: currentColor;
  d: path("M3 17V4.806q0-.097.01-.173q.01-.077.029-.174L1.887 3.308l.713-.714l19.223 19.223l-.713.714L15.579 17zm18 1.183L18.817 16H20V4H6.817l-1-1H21zM4 16h10.579l-2.5-2.5H6.5v-1h4.579l-2-2H6.5v-1h1.579L4 5.421zm12.317-2.5l-1-1H17.5v1zm-3-3l-1-1H17.5v1zm-3-3l-1-1H17.5v1zm2.962 2.962");
}
</style><path class="xc2z_8ywa"/>`,
		"fallback": "material-symbols-light:comments-disabled-outline-sharp",
	});
}

export default Component;
