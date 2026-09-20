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
		"content": `<style>.ni39i-ivg {
  fill: currentColor;
  d: path("M11 3v18a1 1 0 1 0 2 0V3a1 1 0 1 0-2 0");
}
</style><path class="ni39i-ivg"/>`,
		"fallback": "fluent:divider-tall-24-filled",
	});
}

export default Component;
