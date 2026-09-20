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
		"content": `<style>.skphnsbqd {
  fill: currentColor;
  d: path("M10.6 16.05L17.65 9l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM3 21V3h6.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H21v18zm2-2h14V5H5zm7.538-14.962q.212-.213.212-.538t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212t.538-.213M5 19V5z");
}
</style><path class="skphnsbqd"/>`,
		"fallback": "material-symbols:assignment-turned-in-outline-sharp",
	});
}

export default Component;
