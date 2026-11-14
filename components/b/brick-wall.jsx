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
		"content": `<style>.mr177ccqu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19m-19 17h19M2.5 9.25h19m-19 5.5h19M12 3.5v5.75m-5 0v5.5m10-5.5v5.5m-5 0v5.75");
}
</style><path class="mr177ccqu"/>`,
		"fallback": "uix:brick-wall",
	});
}

export default Component;
