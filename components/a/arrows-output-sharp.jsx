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
		"content": `<style>.v8imq4pkv {
  fill: currentColor;
  d: path("M3 21v-6h2v2.6l3.1-3.1l1.4 1.4L6.4 19H9v2zm12 0v-2h2.6l-3.1-3.1l1.4-1.4l3.1 3.1V15h2v6zM8.1 9.5L5 6.4V9H3V3h6v2H6.4l3.1 3.1zm7.8 0l-1.4-1.4L17.6 5H15V3h6v6h-2V6.4zM12 14q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12t-.587 1.413T12 14");
}
</style><path class="v8imq4pkv"/>`,
		"fallback": "material-symbols:arrows-output-sharp",
	});
}

export default Component;
