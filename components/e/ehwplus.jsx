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
		"content": `<style>.fzy-tlbjr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  d: path("m22.964 24.449l.425.344c.741.6 1.82.527 2.473-.168l.166-.176m-7.288-3.786v-1.684m10.89 1.684v-1.684");
}

.zcukar5lk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  d: path("M16.754 31.5s-7.668-7.226-7.618-13.166c.069-8.027 6.222-14.486 14.242-14.821c8.364-.35 15.308 6.453 15.484 14.821c.116 5.481-6.248 12.261-7.04 13.083a.7.7 0 0 0-.13.188l-1.346 2.906a.66.66 0 0 1-.601.384H17.748a.994.994 0 0 0-.994.993v.911c0 .549.445.994.994.994h11.427c.548 0 .993.445.993.994v1.159a.994.994 0 0 1-.993.993h-6.9a.662.662 0 0 0-.479 1.12l2.328 2.44");
}
</style><path class="zcukar5lk"/><path class="fzy-tlbjr"/>`,
		"fallback": "arcticons:ehwplus",
	});
}

export default Component;
