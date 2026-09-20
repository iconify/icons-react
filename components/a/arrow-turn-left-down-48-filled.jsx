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
		"content": `<style>.tmkkkzbro {
  fill: currentColor;
  d: path("M40.5 13a1.5 1.5 0 0 0 0-3h-18a7.5 7.5 0 0 0-7.5 7.5v17.379l-6.44-6.44a1.5 1.5 0 0 0-2.12 2.122l9 9a1.5 1.5 0 0 0 2.12 0l9-9a1.5 1.5 0 0 0-2.12-2.122L18 34.88V17.5a4.5 4.5 0 0 1 4.5-4.5z");
}
</style><path class="tmkkkzbro"/>`,
		"fallback": "fluent:arrow-turn-left-down-48-filled",
	});
}

export default Component;
