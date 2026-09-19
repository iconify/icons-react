import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xcnd_lbdt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.797 16.203H13.321L4.5 23.182v12.649l8.821 6.98h12.476l8.821-6.98V23.182zm8.821 12.467L16.746 42.811M29.91 19.457L6.857 37.696m10.811-21.493L4.5 26.622m31.387-12.623L43.5 7.976H28.067l-7.613 6.023zm-15.433 0v-8.81");
}
</style><path class="xcnd_lbdt"/>`,
		"fallback": "arcticons:argenta",
	});
}

export default Component;
