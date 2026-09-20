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
		"content": `<style>.n-a5vyb1j {
  fill: currentColor;
  d: path("M10 19v-2H4q-.825 0-1.412-.587T2 15V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v10q0 .825-.587 1.413T20 17h-6v2h1q.425 0 .713.288T16 20t-.288.713T15 21H9q-.425 0-.712-.288T8 20t.288-.712T9 19zm-6-4h16V5H4zm0 0V5z");
}
</style><path class="n-a5vyb1j"/>`,
		"fallback": "material-symbols:desktop-windows-outline-rounded",
	});
}

export default Component;
