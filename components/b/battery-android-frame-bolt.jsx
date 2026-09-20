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
		"content": `<style>.on_dolakg {
  fill: currentColor;
  d: path("M4 18q-1.25 0-2.125-.875T1 15V9q0-1.25.875-2.125T4 6h14.05l-1.6 2H4q-.425 0-.712.288T3 9v6q0 .425.288.713T4 16h11.825l-.375 2zm13.675-1l.7-4H15l4.8-6h.525l-.7 4H23l-4.8 6zM4 15V9h11.65l-4.8 6z");
}
</style><path class="on_dolakg"/>`,
		"fallback": "material-symbols:battery-android-frame-bolt",
	});
}

export default Component;
