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
		"content": `<style>.zd7zncgha {
  fill: currentColor;
  d: path("M3.75 2a.75.75 0 0 1 .75.75V7h15V2.75a.75.75 0 0 1 1.5 0v14.5A4.75 4.75 0 0 1 16.25 22h-8.5A4.75 4.75 0 0 1 3 17.25V2.75A.75.75 0 0 1 3.75 2M19.5 8.5h-15V12h15zm-15 8.75a3.25 3.25 0 0 0 3.25 3.25h8.5a3.25 3.25 0 0 0 3.25-3.25V13.5h-15z");
}
</style><path class="zd7zncgha"/>`,
		"fallback": "fluent:eraser-tool-24-regular",
	});
}

export default Component;
