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
		"content": `<style>.liuy8pv_r {
  fill: var(--svg-color--4effaf, #4effaf);
  d: path("M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-2.813-9c0-1.609.389-4.939 2.813-7.875c2.424 2.936 2.813 6.266 2.813 7.875s-.389 4.94-2.813 7.875A12.62 12.62 0 0 1 9.187 12");
}
</style><path class="liuy8pv_r"/>`,
		"fallback": "token-branded:bsx",
	});
}

export default Component;
