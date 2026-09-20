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
		"content": `<style>.zpm90qc7v {
  fill: currentColor;
  d: path("M2 7.25A3.25 3.25 0 0 1 5.25 4h13.5A3.25 3.25 0 0 1 22 7.25v9.5A3.25 3.25 0 0 1 18.75 20H5.25A3.25 3.25 0 0 1 2 16.75zm16.5.5v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-1.5 0m.75 7.25a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-.75-.75m-.75-3.25v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-1.5 0M4.75 7a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5A.75.75 0 0 0 4.75 7M4 15.75v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-1.5 0M4.75 11a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-.75-.75");
}
</style><path class="zpm90qc7v"/>`,
		"fallback": "fluent:filmstrip-24-filled",
	});
}

export default Component;
