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
		"content": `<style>.poibhvblx {
  fill: currentColor;
  d: path("M3 20v-3q0-.425.288-.712T4 16h3l4-4V8.8q-.9-.325-1.45-1.088T9 6q0-1.25.875-2.125T12 3t2.125.875T15 6q0 .95-.55 1.713T13 8.8V12l4 4h3q.425 0 .713.288T21 17v3q0 .425-.288.713T20 21h-3q-.425 0-.712-.288T16 20v-2.05l-4-4l-4 4V20q0 .425-.288.713T7 21H4q-.425 0-.712-.288T3 20");
}
</style><path class="poibhvblx"/>`,
		"fallback": "material-symbols:device-hub-rounded",
	});
}

export default Component;
