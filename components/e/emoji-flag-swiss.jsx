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
		"content": `<style>.e7p24tqsp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 32.874V15.126m8.874 7.309l-17.748 3.13m20.744 9.077V10.903a48 48 0 0 0-2.12-.044c-8.478 0-11.022 2.543-19.5 2.543a50 50 0 0 1-2.12-.044v23.74c.654.028 1.357.043 2.12.043c8.478 0 11.022-2.543 19.5-2.543a49 49 0 0 1 2.12.044");
}
</style><path class="e7p24tqsp"/>`,
		"fallback": "arcticons:emoji-flag-swiss",
	});
}

export default Component;
