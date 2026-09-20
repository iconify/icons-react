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
		"content": `<style>.yratxd2rz {
  fill: currentColor;
  d: path("M12.616 12V5H17v7zm1-1H16V6h-2.384zM17 17H8.616L6 8.058V5h1v3l2.385 8H17zm-8.596 3v-1h8.577v1zm5.212-14H16z");
}
</style><path class="yratxd2rz"/>`,
		"fallback": "material-symbols-light:flight-class-outline-sharp",
	});
}

export default Component;
