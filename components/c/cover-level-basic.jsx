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
		"content": `<style>.besz0abga {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.25 2.25q2.5 0 2.5 2.5v14.5q0 1.036-.732 1.768t-1.768.732t-1.768-.732t-.732-1.768V4.75q0-2.5 2.5-2.5m-4.482 6.732Q13.036 8.25 12 8.25q-2.5 0-2.5 2.5v8.5q0 1.036.732 1.768T12 21.75t1.768-.732t.732-1.768v-8.5q0-1.036-.732-1.768M5.75 14.25q1.036 0 1.768.732t.732 1.768v2.5q0 1.036-.732 1.768t-1.768.732t-1.768-.732t-.732-1.768v-2.5q0-2.5 2.5-2.5");
}
</style><path class="besz0abga"/>`,
		"fallback": "uix-solid:cover-level-basic",
	});
}

export default Component;
