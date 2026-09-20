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
		"content": `<style>.pcs1f5m9n {
  fill: currentColor;
  d: path("m14.198 22l-2.996-4.308H3.577l-1.42-7.032q-.147-.777.356-1.372t1.28-.596q.56 0 1.005.387t.637 1.03l1.623 5.641h4.34l3.66 5.73zM3.481 7.692q-.614 0-1.038-.424T2.02 6.231t.424-1.038t1.038-.424t1.037.424t.424 1.038t-.424 1.037t-1.037.424m13.25 3.558l-4.116-4.134L16.732 3l.694.688l-2.87 2.928H21v1h-6.444l2.863 2.926z");
}
</style><path class="pcs1f5m9n"/>`,
		"fallback": "material-symbols-light:car-fan-mid-left-outline-sharp",
	});
}

export default Component;
