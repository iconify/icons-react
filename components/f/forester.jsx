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
		"content": `<style>.zuxnxxb-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.721 4.209l3.052 4.274A.643.643 0 0 1 12.25 9.5a.747.747 0 0 0-.657 1.101l1.716 3.188A1.5 1.5 0 0 1 11.989 16H5.011a1.5 1.5 0 0 1-1.32-2.211l1.716-3.188A.747.747 0 0 0 4.75 9.5a.643.643 0 0 1-.523-1.017l3.052-4.274a1.5 1.5 0 0 1 2.442 0M8.5 16v5.5m11.5 0L16 7m1.212.015l1.731-.692A1.5 1.5 0 0 1 21 7.716v1.39a1.5 1.5 0 0 1-1.844 1.46l-1.562-.367a1.5 1.5 0 0 1-1.093-1.03l-.126-.419a1.427 1.427 0 0 1 .837-1.735");
}
</style><path class="zuxnxxb-k"/>`,
		"fallback": "uix:forester",
	});
}

export default Component;
