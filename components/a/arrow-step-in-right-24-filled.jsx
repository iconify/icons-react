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
		"content": `<style>.gtmoqe2id {
  fill: currentColor;
  d: path("M8.706 16.234a.75.75 0 1 0 1.088 1.032l4.5-4.75a.75.75 0 0 0 0-1.032l-4.5-4.75a.75.75 0 0 0-1.088 1.032l3.3 3.484H2.75a.75.75 0 0 0 0 1.5h9.256zM22 12a3 3 0 1 0-6 0a3 3 0 0 0 6 0");
}
</style><path class="gtmoqe2id"/>`,
		"fallback": "fluent:arrow-step-in-right-24-filled",
	});
}

export default Component;
