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
		"content": `<style>.df9l-qzzt {
  fill: currentColor;
  d: path("M12.22 4.78a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H9.25a5.75 5.75 0 0 0-5.75 5.75a.75.75 0 0 1-1.5 0A7.25 7.25 0 0 1 9.25 8h6.19z");
}
</style><path class="df9l-qzzt"/>`,
		"fallback": "fluent:arrow-forward-20-filled",
	});
}

export default Component;
