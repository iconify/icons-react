import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h6ur5xamf {
  fill: currentColor;
  d: path("M8 2a6 6 0 1 0 4.472 10H8v-1h5.197q.275-.475.462-1H8V9h5.917Q14 8.511 14 8H8V7h5.917a6 6 0 0 0-.258-1H8V5h5.197a6 6 0 0 0-.725-1H8V3h3.318A5.97 5.97 0 0 0 8 2");
}
</style><path class="h6ur5xamf"/>`,
		"fallback": "fluent:blur-16-filled",
	});
}

export default Component;
