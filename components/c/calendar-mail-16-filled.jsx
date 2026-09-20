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
		"content": `<style>.lg9fgrb0a {
  fill: currentColor;
  d: path("M1.05 3h9.9A2.5 2.5 0 0 0 8.5 1h-5a2.5 2.5 0 0 0-2.45 2M11 4H1v4.5A2.5 2.5 0 0 0 3.5 11H4V8.5A2.5 2.5 0 0 1 6.5 6H11zm-1.224 7.947L5 9.56v3.94A1.5 1.5 0 0 0 6.5 15h7a1.5 1.5 0 0 0 1.5-1.5V9.559l-4.776 2.388a.5.5 0 0 1-.448 0M6.5 7a1.5 1.5 0 0 0-1.499 1.442L10 10.94l4.999-2.5A1.5 1.5 0 0 0 13.5 7z");
}
</style><path class="lg9fgrb0a"/>`,
		"fallback": "fluent:calendar-mail-16-filled",
	});
}

export default Component;
