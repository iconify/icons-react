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
		"content": `<style>.z9gdilb6z {
  fill: currentColor;
  d: path("M7 7h10a5 5 0 0 1 0 10H7A5 5 0 0 1 7 7m0 5a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z");
}
</style><path class="z9gdilb6z"/>`,
		"fallback": "coolicons:air-conditioner-off-centered-fill-round",
	});
}

export default Component;
