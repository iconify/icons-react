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
		"content": `<style>.kgjsqcbyd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.942 5.5C17.59 9.206 13.373 16.096 13.373 23.971S17.647 38.794 24 42.5h.058c6.295-3.706 10.569-10.596 10.569-18.471c0-7.933-4.274-14.823-10.685-18.529m.058.116v36.768m1.675-18.413h-3.35m3.35-2.895h-3.35m3.35 5.79h-3.35m-4.331 10.249h12.07M16.838 12.448h14.324");
}
</style><path class="kgjsqcbyd"/>`,
		"fallback": "arcticons:emoji-american-football",
	});
}

export default Component;
