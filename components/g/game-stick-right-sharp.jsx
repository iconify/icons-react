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
		"content": `<style>.wf45kpw8a {
  fill: currentColor;
  d: path("M17 15.35V20H7v-4.65q-2.275-.8-3.637-2.187T2 10.075q0-2.525 2.913-4.3T12 4t7.088 1.775t2.912 4.3q0 1.7-1.362 3.088T17 15.35m-6.825-2.7h1v-1.8h.7l1.3 1.8h1.2L12.85 10.7q.5-.175.763-.537t.262-.913q0-.75-.488-1.175t-1.262-.425h-1.95zm1-2.55V8.525h.775q.4 0 .65.212t.25.588q0 .4-.25.588t-.675.187z");
}
</style><path class="wf45kpw8a"/>`,
		"fallback": "material-symbols:game-stick-right-sharp",
	});
}

export default Component;
