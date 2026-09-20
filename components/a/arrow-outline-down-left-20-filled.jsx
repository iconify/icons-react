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
		"content": `<style>.dbs54gwix {
  fill: currentColor;
  d: path("M3.666 17.99a1.5 1.5 0 0 1-1.657-1.657L3.088 6.63c.138-1.25 1.662-1.784 2.551-.895l1.067 1.067L11.07 2.44a1.5 1.5 0 0 1 2.122 0l4.37 4.37a1.5 1.5 0 0 1 0 2.121l-4.364 4.363l1.068 1.067c.889.89.354 2.413-.896 2.552z");
}
</style><path class="dbs54gwix"/>`,
		"fallback": "fluent:arrow-outline-down-left-20-filled",
	});
}

export default Component;
