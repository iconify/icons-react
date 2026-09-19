import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f51axpbuv {
  fill: currentColor;
  d: path("m2 9l4 12h12l4-12l-10-7z");
}
</style><path class="f51axpbuv"/>`,
		"fallback": "ic:baseline-pentagon",
	});
}

export default Component;
