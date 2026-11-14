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
		"content": `<style>.jkvpeebao {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3H14v7H2.5Zm0 11H14v7H2.5ZM17 3h4.5v8H17Zm2.25 6v6M17 13h4.5v8H17Z");
}
</style><path class="jkvpeebao"/>`,
		"fallback": "uix-sharp:backlog-linked",
	});
}

export default Component;
