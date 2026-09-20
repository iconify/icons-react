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
		"content": `<style>.t0k86lbml {
  fill: currentColor;
  d: path("M2 20V9.95L4.15 5H3V2h9v3h-1.15l1.65 3.8q-2.025 1.05-3.275 2.938t-1.25 4.237q0 1 .275 2.088T9.1 20zm14 2q-2.5 0-4.25-1.75T10 16t1.75-4.25T16 10t4.25 1.75T22 16t-1.75 4.25T16 22m0-13q-1.05 0-1.775-.725T13.5 6.5t.725-1.775T16 4zq0-1.05.725-1.775T18.5 6.5t1.775.725T21 9z");
}
</style><path class="t0k86lbml"/>`,
		"fallback": "material-symbols:grocery-sharp",
	});
}

export default Component;
