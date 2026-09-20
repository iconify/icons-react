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
		"content": `<style>.l0vsaynug {
  fill: currentColor;
  d: path("m12 16l1.4-1.4l-1.575-1.6H16v-2h-4.175L13.4 9.4L12 8l-4 4zm-9 5V3h6.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H21v18zm2-2h14V5H5zm7.538-14.962q.212-.213.212-.538t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212t.538-.213M5 19V5z");
}
</style><path class="l0vsaynug"/>`,
		"fallback": "material-symbols:assignment-return-outline-sharp",
	});
}

export default Component;
