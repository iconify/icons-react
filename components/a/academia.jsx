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
		"content": `<style>.ct7vvy5zw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.645 35.766L25.737 7.072h-8.446l11.908 28.694c1.927 4.52-1.02 4.852-3.423 5.162H42.5c-2.9 0-3.897-3.095-4.855-5.162M19.777 13.062l-9.422 22.704m0 0C9.397 37.833 8.4 40.928 5.5 40.928h8.278c-2.404-.31-5.35-.642-3.423-5.162m2.95-7.109h12.903");
}
</style><path class="ct7vvy5zw"/>`,
		"fallback": "arcticons:academia",
	});
}

export default Component;
