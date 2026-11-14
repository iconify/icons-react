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
		"content": `<style>.kl9d8tbwb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.4 15.5H2.5v-12h19v7.9m-15-5.15v6.5m3.5-6.5v6.5m3.5-6.5v6.5M15.25 16h6.5m-5.5 0l.5 5.5h3.5l.5-5.5m-3.5 0v-1.75h2.5V16");
}
</style><path class="kl9d8tbwb"/>`,
		"fallback": "uix-sharp:container-delete",
	});
}

export default Component;
