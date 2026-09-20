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
		"content": `<style>.lk41g61af {
  fill: currentColor;
  d: path("M12.713 17.213Q13 16.925 13 16.5h-2q0 .425.288.713T12 17.5t.713-.288M8 16h8v-1h-1v-2.35q0-1.1-.6-2T12.75 9.5v-1h-1.5v1q-1.05.25-1.65 1.15t-.6 2V15H8zm-4 5V9l8-6l8 6v12z");
}
</style><path class="lk41g61af"/>`,
		"fallback": "material-symbols:doorbell-sharp",
	});
}

export default Component;
