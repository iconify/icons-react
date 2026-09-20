import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wny65nrjl {
  fill: currentColor;
  d: path("m8.848 2.845l1.07 2.194l-1.032.01L6 3.998v-.505c.007-1.585 2.153-2.077 2.848-.649m3.124 3.174a3 3 0 0 1 3.028 3V9.5a1.5 1.5 0 0 1-1.985 1.42l-2.242-.767l-5.236 1.763C4 12.435 2.85 10.487 4.044 9.391l1.22-1.12l-3.242-1.108a1.5 1.5 0 0 1-.736-2.29l1.719-2.41C3.626 1.593 5 2.032 5 3.103v1.596l3.544 1.29a1 1 0 0 0 .351.06zM1 14.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5");
}
</style><path class="wny65nrjl"/>`,
		"fallback": "fluent:airplane-landing-16-filled",
	});
}

export default Component;
