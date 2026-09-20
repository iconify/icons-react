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
		"content": `<style>.g7snm9b8z {
  fill: currentColor;
  d: path("M12 4.5a7.5 7.5 0 1 1-7.419 6.392c.067-.454-.265-.892-.724-.892a.75.75 0 0 0-.752.623A9 9 0 1 0 6 5.292V4.25a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H6.9a7.47 7.47 0 0 1 5.1-2");
}
</style><path class="g7snm9b8z"/>`,
		"fallback": "fluent:arrow-counterclockwise-24-regular",
	});
}

export default Component;
