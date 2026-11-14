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
		"content": `<style>.a9i98ukuj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.25 2.25q1.036 0 1.768.732T6.75 4.75v14.5q0 1.036-.732 1.768t-1.768.732t-1.768-.732t-.732-1.768V4.75q0-2.5 2.5-2.5m17.268.732q-.732-.732-1.768-.732q-2.5 0-2.5 2.5v14.5q0 2.5 2.5 2.5q1.036 0 1.768-.732t.732-1.768V4.75q0-1.036-.732-1.768M10.5 8h3q1.036 0 1.768.732T16 10.5v3q0 2.5-2.5 2.5h-3q-1.036 0-1.768-.732T8 13.5v-3q0-1.036.732-1.768T10.5 8");
}
</style><path class="a9i98ukuj"/>`,
		"fallback": "uix-solid:dmz",
	});
}

export default Component;
