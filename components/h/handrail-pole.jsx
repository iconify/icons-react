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
		"content": `<style>.q9c_tzbfu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.25 5v13.75H8q-1.75 0-1.75 1.75T8 22.25h4q1.75 0 1.75-1.75T12 18.75h-1.25V5q0-1.25 1.25-1.25h3q1.25 0 1.25 1.25v3q0 .074.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141T17.75 8V5q0-2.75-2.75-2.75h-3Q9.25 2.25 9.25 5");
}
</style><path class="q9c_tzbfu"/>`,
		"fallback": "uix-solid:handrail-pole",
	});
}

export default Component;
