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
		"content": `<style>.uz-e7tn0f {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.25 5.5h-1q-2.5 0-2.5 2.5v1q0 1.036.732 1.768t1.768.732h1q1.036 0 1.768-.732T7.75 9V8q0-2.5-2.5-2.5m6.25 0h1q1.036 0 1.768.732T15 8v1q0 1.036-.732 1.768T12.5 11.5h-1q-1.036 0-1.768-.732T9 9V8q0-2.5 2.5-2.5m8.25 0h-1q-2.5 0-2.5 2.5v1q0 1.036.732 1.768t1.768.732h1q1.036 0 1.768-.732T22.25 9V8q0-1.036-.732-1.768T19.75 5.5m-15.5 7.25h1q2.5 0 2.5 2.5v1q0 1.036-.732 1.768t-1.768.732h-1q-1.036 0-1.768-.732T1.75 16.25v-1q0-1.036.732-1.768t1.768-.732m8.25 0h-1q-2.5 0-2.5 2.5v1q0 1.036.732 1.768t1.768.732h1q1.036 0 1.768-.732T15 16.25v-1q0-1.036-.732-1.768T12.5 12.75m6.25 0h1q1.036 0 1.768.732t.732 1.768v1q0 1.036-.732 1.768t-1.768.732h-1q-1.036 0-1.768-.732t-.732-1.768v-1q0-2.5 2.5-2.5");
}
</style><path class="uz-e7tn0f"/>`,
		"fallback": "uix-solid:colour-checker",
	});
}

export default Component;
