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
		"content": `<style>.rxdray2wj {
  fill: currentColor;
  d: path("M14 6v1H8.5A2.5 2.5 0 0 0 6 9.5V14H4.5A2.5 2.5 0 0 1 2 11.5V6zm-2.5-4A2.5 2.5 0 0 1 14 4.5V5H2v-.5A2.5 2.5 0 0 1 4.5 2zM7 9.5A1.5 1.5 0 0 1 8.5 8h6A1.5 1.5 0 0 1 16 9.5v5a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 7 14.5zm7 4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5M9.5 10a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z");
}
</style><path class="rxdray2wj"/>`,
		"fallback": "fluent:calendar-note-16-filled",
	});
}

export default Component;
