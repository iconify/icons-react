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
		"content": `<style>.sewkd3b4g {
  fill: currentColor;
  d: path("M11.5 2A2.5 2.5 0 0 1 14 4.5v2.1a5.5 5.5 0 0 0-1-.393V6H3v5.5A1.5 1.5 0 0 0 4.5 13h1.707q.149.524.393 1H4.5A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm0 1h-7A1.5 1.5 0 0 0 3 4.5V5h10v-.5A1.5 1.5 0 0 0 11.5 3m4.5 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M11.5 9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H13a.5.5 0 0 0 0-1h-1V9.5a.5.5 0 0 0-.5-.5");
}
</style><path class="sewkd3b4g"/>`,
		"fallback": "fluent:calendar-clock-16-regular",
	});
}

export default Component;
