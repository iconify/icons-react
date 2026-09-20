import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ff7_c7bxh {
  fill: currentColor;
  d: path("M5 11v8h14v-8zm7 7q-.825 0-1.412-.587T10 16q0-.35.075-.687t.3-.763q.275-.5.575-.975t.625-.95q.15-.225.425-.225t.425.225q.325.475.625.95t.575.975q.225.425.3.763T14 16q0 .825-.587 1.413T12 18m5.713-10.288Q18 7.425 18 7t-.288-.712T17 6t-.712.288T16 7t.288.713T17 8t.713-.288M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z");
}
</style><path class="ff7_c7bxh"/>`,
		"fallback": "material-symbols:dishwasher-rounded",
	});
}

export default Component;
