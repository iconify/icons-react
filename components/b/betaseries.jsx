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
		"content": `<style>.bwj5at93l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.906 24.986L8.094 44.5l.138-39L31.82 19.261l-13.693 8.065V11.335");
}
</style><path class="bwj5at93l"/>`,
		"fallback": "arcticons:betaseries",
	});
}

export default Component;
