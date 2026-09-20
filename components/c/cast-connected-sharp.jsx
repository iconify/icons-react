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
		"content": `<style>.e7ldijbii {
  fill: currentColor;
  d: path("M21 19h-6.538q0-.25-.014-.5t-.04-.5H20V6H4v1.592q-.25-.026-.5-.04T3 7.538V5h18zM3 19v-1.923q.789 0 1.356.567T4.923 19zm4.308 0q0-1.767-1.261-3.018T3 14.692v-1q2.214 0 3.76 1.545Q8.309 16.782 8.309 19zm3.769 0q0-1.679-.636-3.145q-.635-1.467-1.732-2.564T6.145 11.56T3 10.923v-1q1.89 0 3.538.71T9.42 12.58t1.946 2.883t.71 3.538zm2.76-3.77q-.702-2.128-2.172-3.809q-1.47-1.68-3.505-2.652h9.07v6.462z");
}
</style><path class="e7ldijbii"/>`,
		"fallback": "material-symbols-light:cast-connected-sharp",
	});
}

export default Component;
