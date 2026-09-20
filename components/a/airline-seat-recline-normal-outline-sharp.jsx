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
		"content": `<style>.jmzph5b9m {
  fill: currentColor;
  d: path("M6 20V7h2v11h7v2zm5.5-14q-.825 0-1.412-.587T9.5 4t.588-1.412T11.5 2t1.413.588T13.5 4t-.587 1.413T11.5 6M16 22v-5H9V9.5q0-1.05.725-1.775T11.5 7t1.775.725T14 9.5V14h4v8z");
}
</style><path class="jmzph5b9m"/>`,
		"fallback": "material-symbols:airline-seat-recline-normal-outline-sharp",
	});
}

export default Component;
