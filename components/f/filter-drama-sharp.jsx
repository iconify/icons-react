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
		"content": `<style>.m9foxqbpr {
  fill: currentColor;
  d: path("M6.5 20q-2.3 0-3.9-1.6T1 14.5q0-1.825 1.338-3.162T5.5 10t3.163 1.338T10 14.5h2q0-2.575-1.6-4.312T6.25 8q.45-1.85 2.038-2.925T12 4q2.95 0 4.975 2.025T19 11q1.575 0 2.788 1.4T23 15.5q0 1.875-1.312 3.188T18.5 20z");
}
</style><path class="m9foxqbpr"/>`,
		"fallback": "material-symbols:filter-drama-sharp",
	});
}

export default Component;
