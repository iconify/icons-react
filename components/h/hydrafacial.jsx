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
		"content": `<style>.acnhqob1a {
  d: path("M17.333 12.28C16.317 8.226 11 2.5 11 2.5s-6.5 7-6.5 11q0 .16.008.319t.023.318q.016.159.039.317q.024.158.055.314q.031.157.07.311q.039.155.085.308t.1.303t.115.297q.061.148.129.292t.144.285q.075.141.157.278t.17.269q.089.133.184.261t.196.252q.102.123.209.241t.22.231t.231.22t.241.209q.124.101.252.196t.261.184q.132.088.269.17t.278.157t.285.144t.292.129t.297.115t.303.1t.308.085t.311.07t.314.055q.158.023.317.039q.159.015.318.023T11 20q.934 0 1.83-.263");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hvpdxpbsb {
  d: path("M8 13.5a3 3 0 0 0 3 3m7-1.5q.5 2.5 3 3q-2.5.5-3 3q-.5-2.5-3-3q2.5-.5 3-3");
}
</style><g class="hntgybcog"><path class="acnhqob1a"/><path class="hvpdxpbsb"/></g>`,
		"fallback": "uix:hydrafacial",
	});
}

export default Component;
