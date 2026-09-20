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
		"content": `<style>.l16_93pkg {
  fill: currentColor;
  d: path("m4.616 4l1.5 3h3l-1.5-3h2l1.5 3h3l-1.5-3h2l1.5 3h3l-1.5-3H21v16H3V4zM4 8v11h16V8zm0 0v11zm4.692 9.116h6.616v-.166q0-.792-.937-1.313q-.937-.522-2.371-.522t-2.371.521t-.937 1.314zm4.374-4.05q.434-.433.434-1.066t-.434-1.066T12 10.5t-1.066.434Q10.5 11.367 10.5 12t.434 1.066T12 13.5t1.066-.434");
}
</style><path class="l16_93pkg"/>`,
		"fallback": "material-symbols-light:cinematic-blur-outline-sharp",
	});
}

export default Component;
