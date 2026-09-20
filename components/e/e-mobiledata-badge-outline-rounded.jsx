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
		"content": `<style>.fkoa8gj1z {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14zm10 12q.425 0 .713-.288T16 16t-.288-.712T15 15h-5v-2h4q.425 0 .713-.288T15 12t-.288-.712T14 11h-4V9h5q.425 0 .713-.288T16 8t-.288-.712T15 7H9q-.425 0-.712.288T8 8v8q0 .425.288.713T9 17z");
}
</style><path class="fkoa8gj1z"/>`,
		"fallback": "material-symbols:e-mobiledata-badge-outline-rounded",
	});
}

export default Component;
