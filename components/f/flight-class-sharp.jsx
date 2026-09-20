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
		"content": `<style>.g9r02ibyt {
  fill: currentColor;
  d: path("M12.616 12V5H17v7zM17 17H8.616L6 8.058V5h1v3l2.385 8H17zm-8.596 3v-1h8.577v1z");
}
</style><path class="g9r02ibyt"/>`,
		"fallback": "material-symbols-light:flight-class-sharp",
	});
}

export default Component;
