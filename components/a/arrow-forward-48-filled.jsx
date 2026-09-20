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
		"content": `<style>.vejcv_bkv {
  fill: currentColor;
  d: path("M30.44 10.56a1.5 1.5 0 0 1 2.12-2.12l11 11a1.5 1.5 0 0 1 0 2.12l-11 11a1.5 1.5 0 0 1-2.12-2.12L38.878 22H23.5C14.387 22 7 29.387 7 38.5a1.5 1.5 0 0 1-3 0C4 27.73 12.73 19 23.5 19h15.379z");
}
</style><path class="vejcv_bkv"/>`,
		"fallback": "fluent:arrow-forward-48-filled",
	});
}

export default Component;
