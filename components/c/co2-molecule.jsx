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
		"content": `<style>.fp1lf9wcf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.696 12.75h.343Q8.394 16 12 16t3.961-3.25h.377q.189.771.79 1.372q.879.88 2.122.88t2.122-.88q.879-.879.878-2.123q.001-1.242-.878-2.121q-.879-.88-2.122-.88t-2.122.88q-.601.601-.79 1.372h-.402q-.211-1.181-1.108-2.078Q13.657 8 12 8q-3.606 0-3.961 3.25h-.343Q7.348 9 4.75 9q-3 0-3 3t3 3q2.598 0 2.946-2.25");
}
</style><path class="fp1lf9wcf"/>`,
		"fallback": "uix-solid:co2-molecule",
	});
}

export default Component;
