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
		"content": `<style>.pqphanbpv {
  fill: currentColor;
  d: path("M17.985 10.5H2.015a8 8 0 0 0 15.97 0m0-1H2.015a8 8 0 0 1 15.97 0");
}
</style><path class="pqphanbpv"/>`,
		"fallback": "fluent:circle-line-20-filled",
	});
}

export default Component;
