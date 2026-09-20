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
		"content": `<style>.zey5eckpv {
  fill: currentColor;
  d: path("M3 14.462v-1h4.923V11.5H5v-1h3.923v2.962H11.5v-6.9q0-1.499 1.038-2.53Q13.576 3 15.068 3q.996 0 1.855.523q.86.523 1.308 1.439l.9 1.819l-.897.458l-.919-1.839q-.335-.64-.944-1.02T15.061 4q-1.067 0-1.814.747T12.5 6.561v6.9h2.577V10.5H19v1h-2.923v1.962H21v1zM5 20v-4.788h14V20z");
}
</style><path class="zey5eckpv"/>`,
		"fallback": "material-symbols-light:faucet-sharp",
	});
}

export default Component;
