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
		"content": `<style>.u_vbuwu7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 24c0-10.217-8.283-18.5-18.5-18.5S5.5 13.783 5.5 24S13.783 42.5 24 42.5a18.5 18.5 0 0 0 4.632-.59l.004-9.906A9.25 9.25 0 1 1 33.25 24v18.5h9.25z");
}
</style><path class="u_vbuwu7x"/>`,
		"fallback": "arcticons:apobank",
	});
}

export default Component;
