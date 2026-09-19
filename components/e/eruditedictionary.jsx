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
		"content": `<style>.o7667tbqe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.807 31.025A12.903 12.903 0 1 1 36.887 24H2.522A21.483 21.483 0 1 1 5.4 34.748");
}
</style><path class="o7667tbqe"/>`,
		"fallback": "arcticons:eruditedictionary",
	});
}

export default Component;
