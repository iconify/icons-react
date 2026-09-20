import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.iye4x70wg {
  fill: currentColor;
  d: path("M10.5 16H16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-5.5zm-1-12H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.5zM5.75 8a.5.5 0 0 1 .432.248l1.75 3A.5.5 0 0 1 7.5 12H4a.5.5 0 0 1-.432-.752l1.75-3A.5.5 0 0 1 5.75 8m8.932.248l1.75 3A.5.5 0 0 1 16 12h-3.5a.5.5 0 0 1-.432-.752l1.75-3a.5.5 0 0 1 .864 0");
}
</style><path class="iye4x70wg"/>`,
		"fallback": "fluent:dual-screen-mirror-20-filled",
	});
}

export default Component;
