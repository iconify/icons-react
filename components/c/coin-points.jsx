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
		"content": `<style>.e_uudls7e {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752m8.656 3.405l.385.78q.174.354.565.411l.862.125q.966.139 1.268 1.068q.301.929-.399 1.61l-.624.607q-.282.275-.215.664l.147.859q.166.962-.624 1.536t-1.654.118l-.77-.405q-.349-.184-.698 0l-.771.406q-.863.455-1.653-.119t-.624-1.537l.147-.858q.067-.389-.216-.664l-.623-.608q-.7-.68-.399-1.609q.302-.929 1.269-1.068l.861-.125q.391-.057.565-.411l.385-.781Q11.023 7.28 12 7.28t1.408.876");
}
</style><path class="e_uudls7e"/>`,
		"fallback": "uix-solid:coin-points",
	});
}

export default Component;
