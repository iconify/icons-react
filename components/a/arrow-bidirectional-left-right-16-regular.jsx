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
		"content": `<style>.t6t1wwzmi {
  fill: currentColor;
  d: path("M2.146 8.853a.5.5 0 0 1 0-.707l3-3a.5.5 0 1 1 .708.707L3.707 8h8.586l-2.147-2.147a.5.5 0 0 1 .708-.707l3 3a.5.5 0 0 1 0 .707l-3 3a.5.5 0 0 1-.708-.707L12.293 9H3.707l2.147 2.146a.5.5 0 1 1-.708.707z");
}
</style><path class="t6t1wwzmi"/>`,
		"fallback": "fluent:arrow-bidirectional-left-right-16-regular",
	});
}

export default Component;
