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
		"content": `<style>.p-yadbckb {
  fill: currentColor;
  d: path("M15.002 8.999H9.005v-2.25a.75.75 0 0 0-1.267-.542l-5.504 5.25a.75.75 0 0 0 0 1.086l5.504 5.25l.082.068a.75.75 0 0 0 1.186-.611L9.005 15h5.997v2.25a.75.75 0 0 0 1.268.542l5.497-5.25a.75.75 0 0 0 0-1.085l-5.497-5.25a.75.75 0 0 0-1.268.543z");
}
</style><path class="p-yadbckb"/>`,
		"fallback": "fluent:arrows-bidirectional-24-filled",
	});
}

export default Component;
