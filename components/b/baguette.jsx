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
		"content": `<style>.fv98zmbfh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.282 14.828l9.546-9.546a2.75 2.75 0 0 1 3.89 0a2.75 2.75 0 0 1 0 3.89l-9.546 9.546a2.75 2.75 0 0 1-3.89 0a2.75 2.75 0 0 1 0-3.89m.884-.883l5.304 2.474m-2.122-5.656l5.304 2.474M12.53 7.581l5.304 2.474");
}
</style><path class="fv98zmbfh"/>`,
		"fallback": "uix:baguette",
	});
}

export default Component;
