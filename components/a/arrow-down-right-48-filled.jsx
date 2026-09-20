import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.eli3ou6hl {
  fill: currentColor;
  d: path("M22.5 42a1.5 1.5 0 0 1 0-3h14.379L6.439 8.56a1.5 1.5 0 1 1 2.122-2.12L39 36.878V22.5a1.5 1.5 0 0 1 3 0v18a1.5 1.5 0 0 1-1.5 1.5z");
}
</style><path class="eli3ou6hl"/>`,
		"fallback": "fluent:arrow-down-right-48-filled",
	});
}

export default Component;
