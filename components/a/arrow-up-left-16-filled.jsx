import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.doyl_6vmt {
  fill: currentColor;
  d: path("M9 2.75A.75.75 0 0 0 8.25 2h-5.5a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 1.5 0V4.56l9.22 9.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h3.69A.75.75 0 0 0 9 2.75");
}
</style><path class="doyl_6vmt"/>`,
		"fallback": "fluent:arrow-up-left-16-filled",
	});
}

export default Component;
