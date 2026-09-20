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
		"content": `<style>.z5emm0b-m {
  fill: currentColor;
  d: path("M6 5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zm3-1A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5zm-11 7v-7A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5");
}
</style><path class="z5emm0b-m"/>`,
		"fallback": "fluent:calendar-3-day-16-regular",
	});
}

export default Component;
