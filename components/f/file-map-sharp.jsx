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
		"content": `<style>.pumf7hbcl {
  fill: currentColor;
  d: path("M3 21V3h18v18zm9-3q2.425-2.05 3.613-3.812t1.187-3.263q0-2.275-1.45-3.6T12 6T8.65 7.325t-1.45 3.6q0 1.5 1.188 3.263T12 18m-.888-6.113q-.362-.362-.362-.887t.363-.888T12 9.75t.888.363t.362.887t-.363.888t-.887.362t-.888-.363");
}
</style><path class="pumf7hbcl"/>`,
		"fallback": "material-symbols:file-map-sharp",
	});
}

export default Component;
