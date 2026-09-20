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
		"content": `<style>.ykdnypp2k {
  fill: currentColor;
  d: path("M12.5 8a4.5 4.5 0 0 0-7.854-3H6.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 1 1 1.5 0v.778a6 6 0 1 1-1.94 5.324a.75.75 0 1 1 1.485-.211A4.501 4.501 0 0 0 12.5 8");
}
</style><path class="ykdnypp2k"/>`,
		"fallback": "fluent:arrow-counterclockwise-16-filled",
	});
}

export default Component;
