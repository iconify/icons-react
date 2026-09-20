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
		"content": `<style>.mt92rc1ch {
  fill: currentColor;
  d: path("M21.11 22.53L19.579 21H3V4.421L1.887 3.308l.713-.714l19.223 19.223zM4 20h14.579L4 5.421zm17-1.817l-1-1V4H6.817l-1-1H21zm-6.611-6.612l-1.57-1.569l-.769-2.175h-.1l-.34.965l-.716-.715l.672-1.885h.869zm1.111 6.006l-1.136-3.22l1.62 1.622l.578 1.598zm-8.062 0l2.7-7.444l.728.727l-.974 2.763h3.737l.942.943h-5.01L8.5 17.577z");
}
</style><path class="mt92rc1ch"/>`,
		"fallback": "material-symbols-light:font-download-off-outline-sharp",
	});
}

export default Component;
