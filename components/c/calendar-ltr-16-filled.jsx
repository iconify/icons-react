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
		"content": `<style>.i10pre-7x {
  fill: currentColor;
  d: path("M14 11.5V6H2v5.5A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5M5.997 8.248a.748.748 0 1 1-1.497 0a.748.748 0 0 1 1.497 0m0 2.5a.748.748 0 1 1-1.497 0a.748.748 0 0 1 1.497 0m2.752-2.5a.748.748 0 1 1-1.497 0a.748.748 0 0 1 1.497 0m0 2.5a.748.748 0 1 1-1.497 0a.748.748 0 0 1 1.497 0m2.748-2.5a.748.748 0 1 1-1.497 0a.748.748 0 0 1 1.497 0M14 4.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5V5h12z");
}
</style><path class="i10pre-7x"/>`,
		"fallback": "fluent:calendar-ltr-16-filled",
	});
}

export default Component;
