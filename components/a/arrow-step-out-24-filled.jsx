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
		"content": `<style>.f-8probob {
  fill: currentColor;
  d: path("M12.75 13.75a.75.75 0 0 1-1.5 0V4.494l-3.484 3.3a.75.75 0 1 1-1.032-1.088l4.75-4.5a.75.75 0 0 1 1.032 0l4.75 4.5a.75.75 0 0 1-1.032 1.088l-3.484-3.3zM15 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0");
}
</style><path class="f-8probob"/>`,
		"fallback": "fluent:arrow-step-out-24-filled",
	});
}

export default Component;
