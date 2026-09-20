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
		"content": `<style>.o1nlzlylk {
  fill: currentColor;
  d: path("M12.269 15.794a.75.75 0 0 1-1.06-.026l-5.002-5.25a.75.75 0 0 1 0-1.035l5.001-5.25a.75.75 0 1 1 1.086 1.034l-4.508 4.734l4.508 4.733a.75.75 0 0 1-.025 1.06");
}
</style><path class="o1nlzlylk"/>`,
		"fallback": "fluent:chevron-left-20-filled",
	});
}

export default Component;
