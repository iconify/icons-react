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
		"content": `<style>.ccz07able {
  fill: currentColor;
  d: path("M12 2a.75.75 0 0 1 .75.75v9.256l3.484-3.3a.75.75 0 1 1 1.032 1.088l-4.75 4.5a.75.75 0 0 1-1.032 0l-4.75-4.5a.75.75 0 1 1 1.032-1.088l3.484 3.3V2.75A.75.75 0 0 1 12 2m3 17a3 3 0 1 1-6 0a3 3 0 0 1 6 0");
}
</style><path class="ccz07able"/>`,
		"fallback": "fluent:arrow-step-in-24-filled",
	});
}

export default Component;
