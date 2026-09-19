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
		"content": `<style>.w5804ubjm {
  fill: currentColor;
  d: path("M5 17h14v2H5zm7-12L5.33 15h13.34z");
}
</style><path class="w5804ubjm"/>`,
		"fallback": "ic:eject",
	});
}

export default Component;
