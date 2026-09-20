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
		"content": `<style>.ncnvtqgtz {
  fill: currentColor;
  d: path("M10.25 10a1.25 1.25 0 1 0-2.499 0a1.25 1.25 0 0 0 2.499 0m6 0a1.25 1.25 0 1 0-2.499 0a1.25 1.25 0 0 0 2.499 0m-.5 4c-.85 0-1.757.213-2.541.519c-.777.302-1.514.724-1.99 1.2a.75.75 0 1 0 1.061 1.06c.275-.274.803-.602 1.473-.862c.66-.257 1.379-.418 1.997-.418h.6a.75.75 0 0 0 0-1.5zm6.252-2c0-5.524-4.478-10.002-10.002-10.002S2 6.476 2 12c-.001 5.523 4.476 10 10 10s10.002-4.477 10.002-10M3.499 12a8.502 8.502 0 1 1 17.003 0a8.502 8.502 0 0 1-17.003 0");
}
</style><path class="ncnvtqgtz"/>`,
		"fallback": "fluent:emoji-sad-slight-24-regular",
	});
}

export default Component;
