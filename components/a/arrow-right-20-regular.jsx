import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mplgmtpqm {
  fill: currentColor;
  d: path("M10.837 3.13a.5.5 0 0 0-.674.74L16.33 9.5H2.5a.5.5 0 0 0 0 1h13.828l-6.165 5.628a.5.5 0 0 0 .674.739l6.916-6.314a.747.747 0 0 0 0-1.108z");
}
</style><path class="mplgmtpqm"/>`,
		"fallback": "fluent:arrow-right-20-regular",
	});
}

export default Component;
