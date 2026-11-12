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
		"content": `<style>.viqqom1is {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M22 12C22 17.523 17.5228 22 12 22C6.4772 22 2 17.523 2 12C2 6.477 6.4772 2 12 2C17.5228 2 22 6.477 22 12Z");
}
</style><path clip-rule="evenodd" class="viqqom1is"/>`,
		"fallback": "solar:circle-bold",
	});
}

export default Component;
