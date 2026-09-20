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
		"content": `<style>.kxz10ebwg {
  fill: currentColor;
  d: path("M2.5 18V6l9 6zm10 0V6l9 6zm-8-3.75L7.9 12L4.5 9.75zm10 0L17.9 12l-3.4-2.25z");
}
</style><path class="kxz10ebwg"/>`,
		"fallback": "material-symbols:fast-forward-outline",
	});
}

export default Component;
