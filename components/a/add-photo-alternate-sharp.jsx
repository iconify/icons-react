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
		"content": `<style>.q6n996nit {
  fill: currentColor;
  d: path("M4 20V4h9.308q-.346.573-.52 1.209T12.617 6.5q0 2.027 1.428 3.456t3.456 1.429q.656 0 1.292-.173t1.208-.52V20zm2.77-3.616h10.46L14 12.077l-3 3.789l-2-2.404zM17 9V7h-2V6h2V4h1v2h2v1h-2v2z");
}
</style><path class="q6n996nit"/>`,
		"fallback": "material-symbols-light:add-photo-alternate-sharp",
	});
}

export default Component;
