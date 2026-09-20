import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pkrpqfdaq {
  fill: currentColor;
  d: path("m208.14 178.06l-73.27 51.76a11.91 11.91 0 0 1-13.74 0l-73.27-51.76a57.19 57.19 0 0 1-22-61L45.75 41a11.94 11.94 0 0 1 22.79-1.11L86.22 88h83.56l17.68-48.13A11.94 11.94 0 0 1 210.25 41l19.9 76.12a57.19 57.19 0 0 1-22.01 60.94");
}
</style><path class="pkrpqfdaq"/>`,
		"fallback": "ph:gitlab-logo-simple-fill",
	});
}

export default Component;
