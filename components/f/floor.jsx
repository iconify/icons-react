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
		"content": `<style>.s1re1x9eu {
  fill: var(--svg-color--00f3d5, #00f3d5);
  d: path("M3 10.941h18v2.118H3z");
}
</style><path class="s1re1x9eu"/>`,
		"fallback": "token-branded:floor",
	});
}

export default Component;
