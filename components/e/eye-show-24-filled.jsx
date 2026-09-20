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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.yzo91tkvi {
  d: path("M12 9.005a4 4 0 1 1 0 8a4 4 0 0 1 0-8zM12 5.5c4.613 0 8.596 3.15 9.701 7.564a.75.75 0 1 1-1.455.365a8.503 8.503 0 0 0-16.493.004a.75.75 0 0 1-1.455-.363A10.003 10.003 0 0 1 12 5.5z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="yzo91tkvi"/></g>`,
		"fallback": "fluent:eye-show-24-filled",
	});
}

export default Component;
