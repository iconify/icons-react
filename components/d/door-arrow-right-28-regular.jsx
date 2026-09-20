import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z_zag8b0u {
  fill: currentColor;
  d: path("M5 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8.427a7.5 7.5 0 0 0-1.5-.36V5A1.5 1.5 0 0 0 20 3.5H8A1.5 1.5 0 0 0 6.5 5v18A1.5 1.5 0 0 0 8 24.5h6.155a7.5 7.5 0 0 0 1.246 1.5H8a3 3 0 0 1-3-3zm4.5 10a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M27 20.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0M16.5 20a.5.5 0 0 0 0 1h6.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 .146-.351v-.006a.5.5 0 0 0-.146-.35l-3-3a.5.5 0 0 0-.708.707L23.293 20z");
}
</style><path class="z_zag8b0u"/>`,
		"fallback": "fluent:door-arrow-right-28-regular",
	});
}

export default Component;
