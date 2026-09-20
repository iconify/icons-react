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
		"content": `<style>.ezikajb4q {
  fill: currentColor;
  d: path("M9 17h4q.425 0 .713-.288T14 16v-1l2 1.05v-4.1L14 13v-1q0-.425-.288-.712T13 11H9q-.425 0-.712.288T8 12v4q0 .425.288.713T9 17m-5 4V9l8-6l8 6v12zm2-2h12v-9l-6-4.5L6 10zm6-6.75");
}
</style><path class="ezikajb4q"/>`,
		"fallback": "material-symbols:camera-indoor-outline",
	});
}

export default Component;
