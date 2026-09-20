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
		"content": `<style>.nxi9si1qx {
  fill: currentColor;
  d: path("M2 20v-6q.825 0 1.413-.587T4 12t-.587-1.412T2 10V4h20v16zm2-2h16V6H4v2.55q.925.55 1.463 1.463T6 12t-.537 1.988T4 15.45zm4.85-2.35l8.9-2.35q.375-.1.563-.462t.087-.738t-.437-.562t-.713-.088l-2.45.65l-4-3.75l-1.4.35l2.4 4.2l-2.4.6l-1.25-.95l-.95.25zM12 12");
}
</style><path class="nxi9si1qx"/>`,
		"fallback": "material-symbols:airplane-ticket-outline-sharp",
	});
}

export default Component;
