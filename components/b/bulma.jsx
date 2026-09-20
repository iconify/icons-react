import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":373};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ikl1hfb8q {
  fill: var(--svg-color--00d1b2, #00d1b2);
  d: path("M0 256L23.273 93.091L116.364 0l116.363 116.364l-69.818 69.818L256 279.273l-139.636 93.091z");
}
</style><path class="ikl1hfb8q"/>`,
		"fallback": "logos:bulma",
	});
}

export default Component;
