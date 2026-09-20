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
		"content": `<style>.erhrz7b6r {
  fill: currentColor;
  d: path("M6.5 15H10q.425 0 .713-.288T11 14v-4q0-.425-.288-.712T10 9H7.5q-.425 0-.712.288T6.5 10v1.5q0 .425.288.713t.712.287h2v1h-3zM8 11.5V10h1.5v1.5zm5 3.5h1.5v-2.25L16.25 15h1.825l-2.325-3l2.325-3H16.25l-1.75 2.25V9H13zm-8 6q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z");
}
</style><path class="erhrz7b6r"/>`,
		"fallback": "material-symbols:9k-outline",
	});
}

export default Component;
