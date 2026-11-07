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
		"content": `<style>.sikfle8lf {
  fill: currentColor;
  d: path("m2.707 2.293l19 19a.999.999 0 1 1-1.414 1.414L18.586 21H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h.586L1.293 3.707a.999.999 0 1 1 1.414-1.414M22 18.757L7.914 4.672l1.379-1.379A1 1 0 0 1 10 3h4c.265 0 .52.105.707.293L17.414 6H21a1 1 0 0 1 1 1Zm-7.968-2.311l-1.514-1.513a2 2 0 0 1-1.931-.518a2 2 0 0 1-.52-1.933l-1.513-1.514a4.002 4.002 0 0 0 5.478 5.478");
}
</style><path class="sikfle8lf"/>`,
		"fallback": "coolicons:camera-off-fill-sharp",
	});
}

export default Component;
