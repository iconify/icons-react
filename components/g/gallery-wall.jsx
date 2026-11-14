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
		"content": `<style>.ip3gngbes {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4 2.75h7q.932 0 1.591.659T13.25 5v4.5q0 .932-.659 1.591T11 11.75H4q-2.25 0-2.25-2.25V5q0-2.25 2.25-2.25m16 2.5h-3q-2.25 0-2.25 2.25v6q0 2.25 2.25 2.25h3q2.25 0 2.25-2.25v-6q0-2.25-2.25-2.25m-12.5 8H11q.932 0 1.591.659t.659 1.591V19q0 .932-.659 1.591T11 21.25H7.5q-2.25 0-2.25-2.25v-3.5q0-2.25 2.25-2.25");
}
</style><path class="ip3gngbes"/>`,
		"fallback": "uix-solid:gallery-wall",
	});
}

export default Component;
