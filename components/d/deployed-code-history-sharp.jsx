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
		"content": `<style>.dohbfdpac {
  fill: currentColor;
  d: path("M18.5 18.8V16h-1v3.2l2.15 2.15l.7-.7zM12 10.85L6.075 7.425L5 8.05V9.1l7 4.05l7-4.05V8.05l-1.075-.625zm-9 6.275V6.875L12 1.7l9 5.175v5.8q-.675-.325-1.437-.5T18 12q-2.9 0-4.95 2.05T11 19q0 .675.125 1.325t.375 1.25l.25.575zm11.463 5.413Q13 21.075 13 19t1.463-3.537T18 14t3.538 1.463T23 19t-1.463 3.538T18 24t-3.537-1.463");
}
</style><path class="dohbfdpac"/>`,
		"fallback": "material-symbols:deployed-code-history-sharp",
	});
}

export default Component;
