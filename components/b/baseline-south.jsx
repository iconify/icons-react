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
		"content": `<style>.fuvw7qbuz {
  fill: currentColor;
  d: path("m19 15l-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7z");
}
</style><path class="fuvw7qbuz"/>`,
		"fallback": "ic:baseline-south",
	});
}

export default Component;
