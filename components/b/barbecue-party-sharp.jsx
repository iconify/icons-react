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
		"content": `<style>.ko8k9dbhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9 2.75l-.9.9l.9.9l.9.9l-.9.9m6-3.6l-.9.9l.9.9l.9.9l-.9.9m-8 1.9h10m-13.5 3h17a8.5 6.5 0 0 1-17 0Zm4.75 5.65L6.5 21.25m9.25-4.35l1.75 4.35m-5.5-3.5v3.5");
}
</style><path class="ko8k9dbhv"/>`,
		"fallback": "iconoven:barbecue-party-sharp",
	});
}

export default Component;
