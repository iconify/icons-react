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
		"content": `<style>.yla_jxb8c {
  fill: currentColor;
  d: path("M2 11.5V6h12v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5m8.003-3.252a.748.748 0 1 0 1.497 0a.748.748 0 0 0-1.497 0m0 2.5a.748.748 0 1 0 1.497 0a.748.748 0 0 0-1.497 0m-2.752-2.5a.748.748 0 1 0 1.497 0a.748.748 0 0 0-1.497 0m0 2.5a.748.748 0 1 0 1.497 0a.748.748 0 0 0-1.497 0m-2.748-2.5a.748.748 0 1 0 1.497 0a.748.748 0 0 0-1.497 0M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5V5H2z");
}
</style><path class="yla_jxb8c"/>`,
		"fallback": "fluent:calendar-rtl-16-filled",
	});
}

export default Component;
