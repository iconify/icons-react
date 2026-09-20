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
		"content": `<style>.yk5orfbbo {
  fill: currentColor;
  d: path("M16 4.502a3.5 3.5 0 0 0 5.001 3.163L21 18.25A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75A2.75 2.75 0 0 1 5.75 3h10.588A3.5 3.5 0 0 0 16 4.502m3.5-2.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5");
}
</style><path class="yk5orfbbo"/>`,
		"fallback": "fluent:badge-24-filled",
	});
}

export default Component;
