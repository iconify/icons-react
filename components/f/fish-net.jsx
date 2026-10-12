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
		"content": `<style>.dlll0cc_h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.5 5.5c0 8.5-3.5 15.25-7.5 15.25S4.5 14 4.5 5.5m.1 2.6l10.85 10.85M7 5.5l10.4 10.4M12 5.5l6.7 6.7m-13.4 0L12 5.5M6.6 15.9L17 5.5M8.55 18.95L19.4 8.1M2.75 5.5h18.5");
}
</style><path class="dlll0cc_h"/>`,
		"fallback": "iconoven:fish-net",
	});
}

export default Component;
