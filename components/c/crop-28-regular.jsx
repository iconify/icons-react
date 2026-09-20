import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fcxuhg-td {
  fill: currentColor;
  d: path("M8 2.75a.75.75 0 0 0-1.5 0V6.5H2.75a.75.75 0 0 0 0 1.5H6.5v9.75a3.75 3.75 0 0 0 3.75 3.75H20v3.75a.75.75 0 0 0 1.5 0V21.5h3.75a.75.75 0 0 0 0-1.5h-15A2.25 2.25 0 0 1 8 17.75zm12 7.5V19h1.5v-8.75a3.75 3.75 0 0 0-3.75-3.75H9V8h8.75A2.25 2.25 0 0 1 20 10.25");
}
</style><path class="fcxuhg-td"/>`,
		"fallback": "fluent:crop-28-regular",
	});
}

export default Component;
