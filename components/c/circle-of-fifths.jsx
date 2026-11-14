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
		"content": `<style>.ocndcjb9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.185 16.19q.495.805 1.163 1.472q.669.667 1.475 1.161m8.294.037q.831-.5 1.52-1.183q.688-.684 1.193-1.512m.022-8.294q-.501-.831-1.186-1.518t-1.514-1.191m-8.294-.006q-.83.502-1.516 1.188T5.154 7.86M12 8.5l3.5 3.5l-3.5 3.5L8.5 12ZM10.5 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm8 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-8 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-8-8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><path class="ocndcjb9e"/>`,
		"fallback": "uix-sharp:circle-of-fifths",
	});
}

export default Component;
