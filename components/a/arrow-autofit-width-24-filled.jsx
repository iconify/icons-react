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
		"content": `<style>.arx8amb2b {
  fill: currentColor;
  d: path("M5.793 13.793a1 1 0 0 1 1.414 1.414L6.414 16H9a1 1 0 1 1 0 2H6.414l.793.793a1 1 0 1 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414zm11 0a1 1 0 0 1 1.414 0l2.5 2.5l.068.076a1 1 0 0 1-.068 1.338l-2.5 2.5a1 1 0 0 1-1.414-1.414l.793-.793H15a1 1 0 0 1 0-2h2.586l-.793-.793a1 1 0 0 1 0-1.414M17.5 4A2.5 2.5 0 0 1 20 6.5V11a1 1 0 1 1-2 0V6.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11a1 1 0 1 1-2 0V6.5A2.5 2.5 0 0 1 6.5 4z");
}
</style><path class="arx8amb2b"/>`,
		"fallback": "fluent:arrow-autofit-width-24-filled",
	});
}

export default Component;
