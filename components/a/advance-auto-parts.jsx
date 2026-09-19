import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a16_njbyq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.631 10.475c13.844 2.706 12.435-1.102 21.869-.457M11.631 37.074c13.845 2.706 12.436-1.103 21.87-.457M13.43 31.754c13.844 2.706 12.435-1.102 21.868-.457m-20.057-4.863c13.845 2.707 12.436-1.102 21.87-.457M17.03 21.114c13.844 2.707 12.435-1.102 21.868-.456m-20.07-4.863c13.845 2.706 12.436-1.103 21.87-.457m-23.213-4.856H14.5l-9 26.599h2.986zm3.146-.007l-9 26.599zm6.789.935l-9 26.6zm7.261-.725l-9 26.599zm7.819-.666l-9 26.599z");
}
</style><path class="a16_njbyq"/>`,
		"fallback": "arcticons:advance-auto-parts",
	});
}

export default Component;
