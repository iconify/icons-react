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
		"content": `<style>.mgoon9bai {
  fill: currentColor;
  d: path("M17.23 15.23h-3.393q-.08-.25-.177-.496t-.225-.503h2.796V9.769H9.786q-.378-.298-.783-.548t-.844-.452h9.072zM21 19h-6.538q0-.25-.014-.5t-.04-.5H20V6H4v1.592q-.25-.026-.5-.04T3 7.538V5h18zM3 19v-1.923q.789 0 1.356.567T4.923 19zm4.308 0q0-1.786-1.261-3.028T3 14.692v-1q2.214 0 3.76 1.545Q8.309 16.782 8.309 19zm3.769 0q0-1.679-.636-3.145q-.635-1.467-1.732-2.564T6.145 11.56T3 10.923v-1q1.89 0 3.538.71T9.42 12.58t1.946 2.883t.71 3.538z");
}
</style><path class="mgoon9bai"/>`,
		"fallback": "material-symbols-light:cast-connected-outline-sharp",
	});
}

export default Component;
