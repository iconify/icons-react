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
		"content": `<style>.fd5ilx3ab {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14zm5 8h4v3q0 .425.288.713T15 17t.713-.288T16 16V8q0-.425-.288-.712T15 7t-.712.288T14 8v3h-4V8q0-.425-.288-.712T9 7t-.712.288T8 8v8q0 .425.288.713T9 17t.713-.288T10 16z");
}
</style><path class="fd5ilx3ab"/>`,
		"fallback": "material-symbols:h-mobiledata-badge-outline-rounded",
	});
}

export default Component;
