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
		"content": `<style>.t95zvacjd {
  d: path("M13.588 21h-8.47V10.962L13.588 3zm2.647 0V8.538l2.647 2.768V21z");
}
</style><path class="t95zvacjd"/>`,
		"fallback": "token-branded:imo",
	});
}

export default Component;
