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
		"content": `<style>.f_re03ygq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-27 10.6h5.1m-5.1 15.8h5.1m-5.1-5.3h5.1m4.8-5.2h5.2m-5.2 5.2h5.2m4.8-10.5h5.1m-5.1 5.3h5.1m-5.1 10.5h5.1");
}
</style><path class="f_re03ygq"/>`,
		"fallback": "arcticons:bankid-no",
	});
}

export default Component;
