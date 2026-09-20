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
		"content": `<style>.k5wox677b {
  fill: currentColor;
  d: path("M3 19V5h18v1.616H10.846V9.5H6.5v1h4.346v3H6.5v1h4.346q0 1.233.342 2.398q.34 1.166 1.116 2.102zm13.73 2.539v-2.581q-1.5-.177-2.5-1.312q-1-1.134-1-2.646V9h8v6q0 1.512-1 2.646q-1 1.135-2.5 1.312v1.58h3v1zm2.25-7.039h1.25V10h-6v2.5h.75q.702 0 1.328.317t1.069.89q.267.397.702.595t.902.198");
}
</style><path class="k5wox677b"/>`,
		"fallback": "material-symbols-light:fluid-balance-sharp",
	});
}

export default Component;
