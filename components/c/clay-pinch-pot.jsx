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
		"content": `<style>.vritlnywz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 5.75q-9.017 0-9.749 11.703l-.001.047q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h18l.047-.001q.074-.005.145-.024t.138-.051q.066-.033.125-.078q.059-.044.107-.1q.049-.055.086-.119q.038-.064.061-.134q.024-.07.034-.143t.006-.147Q21.017 5.75 12 5.75M7.75 12q0-2.75 4.25-2.75q1.649 0 2.847.685q1.403.801 1.403 2.065q0 2.75-4.25 2.75T7.75 12");
}
</style><path class="vritlnywz"/>`,
		"fallback": "uix-solid:clay-pinch-pot",
	});
}

export default Component;
