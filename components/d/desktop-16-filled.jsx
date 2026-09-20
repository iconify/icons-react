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
		"content": `<style>.s_nwbn9it {
  fill: currentColor;
  d: path("M3.501 2a1.5 1.5 0 0 0-1.5 1.5v6.997a1.5 1.5 0 0 0 1.5 1.5h2.5V13H4.495a.5.5 0 0 0 0 1H11.5a.5.5 0 1 0 0-1H10v-1.003h2.501a1.5 1.5 0 0 0 1.5-1.5V3.5a1.5 1.5 0 0 0-1.5-1.5zm5.5 9.997V13H7v-1.003z");
}
</style><path class="s_nwbn9it"/>`,
		"fallback": "fluent:desktop-16-filled",
	});
}

export default Component;
