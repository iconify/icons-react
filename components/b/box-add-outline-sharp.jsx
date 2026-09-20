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
		"content": `<style>.bw7b7lsbw {
  fill: currentColor;
  d: path("M16 8h3zM5 8h8.45H13h.35zm.4-2h13.2l-.85-1H6.25zm4.6 6.75l2-1l2 1V8h-4zM14.55 21H3V5.8L5.3 3h13.4L21 5.8v5.625q-.475-.175-.975-.275T19 11.05V8h-3v3.825q-.875.5-1.525 1.238t-1.025 1.662L12 14l-4 2V8H5v11h8.35q.2.575.5 1.075t.7.925M18 21v-3h-3v-2h3v-3h2v3h3v2h-3v3z");
}
</style><path class="bw7b7lsbw"/>`,
		"fallback": "material-symbols:box-add-outline-sharp",
	});
}

export default Component;
