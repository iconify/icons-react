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
		"content": `<style>.ymmezihid {
  fill: currentColor;
  d: path("M3 19V8.712h2.827V5h4.789v3.712h2.769V5h4.788v3.712H21V19z");
}
</style><path class="ymmezihid"/>`,
		"fallback": "material-symbols-light:brick",
	});
}

export default Component;
