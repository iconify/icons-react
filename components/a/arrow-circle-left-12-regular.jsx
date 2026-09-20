import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xz_nvxyje {
  fill: currentColor;
  d: path("M5.902 3.646a.5.5 0 0 1 0 .708L4.756 5.5H8.5a.5.5 0 0 1 0 1H4.756l1.146 1.146a.5.5 0 1 1-.707.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .707 0M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6m5-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8");
}
</style><path class="xz_nvxyje"/>`,
		"fallback": "fluent:arrow-circle-left-12-regular",
	});
}

export default Component;
