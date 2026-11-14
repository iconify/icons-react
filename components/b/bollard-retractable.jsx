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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k5rmalbpi {
  d: path("M2.5 17h4v4.5h11V17h4");
}

.kh-0nbiwy {
  d: path("M9.25 18.75V12a2.75 2.75 0 0 1 5.5 0v6.75M12 2.5v4M9.25 3.75L12 6.5l2.75-2.75");
}
</style><g class="hntgybcog"><path class="k5rmalbpi"/><path class="kh-0nbiwy"/></g>`,
		"fallback": "uix:bollard-retractable",
	});
}

export default Component;
