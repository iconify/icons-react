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
		"content": `<style>.o-xna_61e {
  fill: currentColor;
  d: path("M5.161 12.83c.553-1.107 2.133-1.107 2.686 0l3.997 7.998A1.5 1.5 0 0 1 10.5 23H2.507a1.5 1.5 0 0 1-1.343-2.172zM12 2c5.522 0 10 4.478 10 10c0 5.198-3.968 9.468-9.04 9.952a2.47 2.47 0 0 0-.223-1.571l-3.996-7.997c-.921-1.845-3.553-1.845-4.474 0l-1.602 3.203A10 10 0 0 1 2 12C2 6.478 6.478 2 12 2M6.504 19.998a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m0-5.003a.5.5 0 0 0-.5.501v3.001a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-.5-.502M11.25 6a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5H12V6.75a.75.75 0 0 0-.75-.75");
}
</style><path class="o-xna_61e"/>`,
		"fallback": "fluent:clock-warning-24-filled",
	});
}

export default Component;
