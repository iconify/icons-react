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
		"content": `<style>.k53vtabkp {
  fill: var(--svg-color--fcfe52, #fcfe52);
  d: path("M3 3h18v6.429h-3.111a6.428 6.428 0 1 0 0 5.143H21V21H3z");
}
</style><path class="k53vtabkp"/>`,
		"fallback": "token-branded:celo",
	});
}

export default Component;
