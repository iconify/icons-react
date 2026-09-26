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
		"content": `<style>.zg-_syi2s {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1.9417 19.6637L7.1788 5L12.4158 19.6637M3.9645 14L10.3931 14M15.6146 19.7127L18.8284 9L22.0422 19.7127M16.7284 16L20.9284 16");
}
</style><path class="zg-_syi2s"/>`,
		"fallback": "keyline-icons:case-upper-sharp",
	});
}

export default Component;
