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
		"content": `<style>.b4xdjhmgx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.25 7.696Q4 7.348 4 4.75q0-3 3-3t3 3q0 2.598-2.25 2.946v8.608q1.89.292 2.192 2.172q2.359-.163 4.15-1.459Q16.25 15.456 16.25 13v-.586q-.771-.191-1.372-.792Q14 10.743 14 9.501v-.002q0-1.242.878-2.121q.879-.88 2.122-.88t2.122.88T20 9.499q.001 1.244-.878 2.123q-.601.601-1.372.792V13q0 3.222-2.779 5.233q-2.179 1.576-5.022 1.746Q9.61 22.25 7 22.25q-3 0-3-3q0-2.598 2.25-2.946z");
}
</style><path class="b4xdjhmgx"/>`,
		"fallback": "uix-solid:commit-graph-merge",
	});
}

export default Component;
