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
		"content": `<style>.pvmjui3hb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.75 6.25V5.5q0-3.25 3.25-3.25t3.25 3.25v.75h3.25q3.75 0 3.75 3.75t-3.75 3.75h-2.826l.038.038q1.538 1.537 1.538 3.712t-1.538 3.712Q14.175 22.75 12 22.75t-3.712-1.538Q6.75 19.675 6.75 17.5t1.538-3.712l.038-.038H5.5q-3.75 0-3.75-3.75T5.5 6.25zm1.5 0V5.5q0-1.75 1.75-1.75t1.75 1.75v.75z");
}
</style><path class="pvmjui3hb"/>`,
		"fallback": "uix-solid:category-baby",
	});
}

export default Component;
