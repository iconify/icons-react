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
		"content": `<style>.l-gqd7eyk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5h10m4 0h4M3 11.25h3m4 0h11M3 18h3m4 0h2.2M13 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-7 6.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0M6 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.25-1.25h.809a1.5 1.5 0 0 0 .812-.238l1.379-.887a1.136 1.136 0 0 1 1.75.955v2.84a1.136 1.136 0 0 1-1.75.955l-1.379-.887a1.5 1.5 0 0 0-.812-.238h-.809A1.25 1.25 0 0 1 15 18a1.25 1.25 0 0 1 1.25-1.25");
}
</style><path class="l-gqd7eyk"/>`,
		"fallback": "uix:audio-settings-game",
	});
}

export default Component;
