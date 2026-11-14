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
		"content": `<style>.zzgcd4bek {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13.25 2.25h-2.5q-2.5 0-2.5 2.5v2.5q0 .414-.293.707t-.707.293h-2.5q-2.5 0-2.5 2.5v2.5q0 1.036.732 1.768t1.768.732h2.5q.414 0 .707.293t.293.707v2.5q0 1.036.732 1.768t1.768.732h2.5q1.036 0 1.768-.732t.732-1.768v-2.5q0-1 1-1h2.5q1.036 0 1.768-.732t.732-1.768v-2.5q0-1.036-.732-1.768T19.25 8.25h-2.5q-1 0-1-1v-2.5q0-1.036-.732-1.768T13.25 2.25");
}
</style><path class="zzgcd4bek"/>`,
		"fallback": "uix-solid:dpad-right",
	});
}

export default Component;
