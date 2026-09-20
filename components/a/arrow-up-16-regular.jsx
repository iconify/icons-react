import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ics7z-n9j {
  fill: currentColor;
  d: path("M7.5 13.5a.5.5 0 0 0 1 0V3.803l3.628 4.031a.5.5 0 0 0 .744-.668l-4.5-5a.5.5 0 0 0-.744 0l-4.5 5a.5.5 0 0 0 .744.668L7.5 3.803z");
}
</style><path class="ics7z-n9j"/>`,
		"fallback": "fluent:arrow-up-16-regular",
	});
}

export default Component;
