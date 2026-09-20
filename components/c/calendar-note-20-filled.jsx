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
		"content": `<style>.xshwsacat {
  fill: currentColor;
  d: path("M17 7v3h-5.5A2.5 2.5 0 0 0 9 12.5V17H5.5A2.5 2.5 0 0 1 3 14.5V7zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3zM10 12.5a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5zm7 4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5M12.5 13a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z");
}
</style><path class="xshwsacat"/>`,
		"fallback": "fluent:calendar-note-20-filled",
	});
}

export default Component;
