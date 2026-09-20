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
		"content": `<style>.foybid0tu {
  fill: currentColor;
  d: path("M16 4.5A2.5 2.5 0 0 0 13.5 2h-9A2.5 2.5 0 0 0 2 4.5v9A2.5 2.5 0 0 0 4.5 16h9a2.5 2.5 0 0 0 2.5-2.5zM3 6h12v7.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 13.5zm1.5-3h9A1.5 1.5 0 0 1 15 4.5V5H3v-.5A1.5 1.5 0 0 1 4.5 3M5 17c.456.607 1.182 1 2 1h6.5a4.5 4.5 0 0 0 4.5-4.5v-7c0-.818-.393-1.544-1-2v9a3.5 3.5 0 0 1-3.5 3.5z");
}
</style><path class="foybid0tu"/>`,
		"fallback": "fluent:calendar-multiple-20-regular",
	});
}

export default Component;
