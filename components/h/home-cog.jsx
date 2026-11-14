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
		"content": `<style>.a4-m50bcy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m9.201 4.953l-4.5 3.937Q3.25 10.16 3.25 12.088V16.5q0 1.76 1.245 3.005T7.5 20.75h9q1.76 0 3.005-1.245T20.75 16.5v-4.412q0-1.928-1.451-3.198l-4.5-3.937q-2.799-2.45-5.598 0m1.425 6.347v-.125q.009-1.37 1.374-1.37t1.374 1.365v.133q.001.102.093.155q.093.054.186.001l.107-.062q1.191-.674 1.873.506q.681 1.182-.496 1.872l-.112.065q-.09.053-.09.16t.092.161l.108.063q1.179.691.498 1.873q-.682 1.18-1.868.509l-.116-.067q-.089-.051-.181.002q-.093.054-.094.161v.123q-.009 1.37-1.374 1.37t-1.374-1.365v-.133q-.001-.102-.093-.155q-.093-.054-.186-.001l-.107.062q-1.191.674-1.873-.506q-.681-1.182.496-1.872l.112-.065q.09-.053.09-.16t-.092-.161l-.108-.063q-1.179-.691-.498-1.873q.682-1.18 1.868-.509l.116.067q.089.051.181-.002q.093-.054.094-.159");
}
</style><path class="a4-m50bcy"/>`,
		"fallback": "uix-solid:home-cog",
	});
}

export default Component;
