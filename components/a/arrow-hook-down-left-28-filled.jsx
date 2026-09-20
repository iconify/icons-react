import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s-qqy5sxt {
  fill: currentColor;
  d: path("M21.218 8.023C20.01 6.778 18.242 6 16 6H9a1 1 0 1 0 0 2h7c1.758 0 2.99.597 3.782 1.415c.804.83 1.218 1.948 1.218 3.085s-.414 2.256-1.218 3.085C18.99 16.403 17.758 17 16 17H8.414l3.293-3.293a1 1 0 1 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L8.414 19H16c2.242 0 4.01-.778 5.218-2.023C22.414 15.744 23 14.113 23 12.5s-.586-3.244-1.782-4.477");
}
</style><path class="s-qqy5sxt"/>`,
		"fallback": "fluent:arrow-hook-down-left-28-filled",
	});
}

export default Component;
