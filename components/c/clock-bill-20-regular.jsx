import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ldubf7ryw {
  fill: currentColor;
  d: path("M11 1a8 8 0 1 1-1 15.938V15.93q.49.07 1 .071a7 7 0 1 0-7-7H3a8 8 0 0 1 8-8m-.5 3a.5.5 0 0 1 .492.41L11 4.5V9h2.5a.5.5 0 0 1 .09.992L13.5 10h-3a.5.5 0 0 1-.492-.41L10 9.5v-5a.5.5 0 0 1 .5-.5M1 12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm5.5 0h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m0 2h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m0 2h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1");
}
</style><path class="ldubf7ryw"/>`,
		"fallback": "fluent:clock-bill-20-regular",
	});
}

export default Component;
