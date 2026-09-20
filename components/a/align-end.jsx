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
		"content": `<style>.lj0s6zbtx {
  fill: currentColor;
  d: path("M2 22v-2h20v2zm5-11V8h10v3zm0 6v-3h10v3z");
}
</style><path class="lj0s6zbtx"/>`,
		"fallback": "material-symbols:align-end",
	});
}

export default Component;
