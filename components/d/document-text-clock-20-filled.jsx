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
		"content": `<style>.npukzibme {
  fill: currentColor;
  d: path("M10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v5.707A5.5 5.5 0 0 1 5.5 9c1.177 0 2.268.37 3.163 1H13.5a.5.5 0 0 1 0 1H9.743q.381.462.657 1h3.1a.5.5 0 0 1 0 1h-2.707q.137.484.185 1H13.5a.5.5 0 0 1 0 1h-2.522a5.5 5.5 0 0 1-1.235 3H14.5a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5m1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5M5.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9M5 12.5a.5.5 0 0 1 1 0V14h1a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5z");
}
</style><path class="npukzibme"/>`,
		"fallback": "fluent:document-text-clock-20-filled",
	});
}

export default Component;
