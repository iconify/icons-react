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
		"content": `<style>.eeu0b0rss {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12.75 1.75h-1.5q-2.5 0-2.5 2.5v4.5h-4.5q-1.036 0-1.768.732T1.75 11.25v1.5q0 1.036.732 1.768t1.768.732h4.5v4.5q0 1.036.732 1.768t1.768.732h1.5q1.036 0 1.768-.732t.732-1.768v-4.5h4.5q1.036 0 1.768-.732t.732-1.768v-1.5q0-1.036-.732-1.768T19.75 8.75h-4.5v-4.5q0-1.036-.732-1.768T12.75 1.75");
}
</style><path class="eeu0b0rss"/>`,
		"fallback": "uix-solid:cross-greek",
	});
}

export default Component;
