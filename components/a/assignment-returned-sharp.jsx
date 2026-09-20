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
		"content": `<style>.miobbts6d {
  fill: currentColor;
  d: path("m12 16l4-4l-1.4-1.4l-1.6 1.55V8h-2v4.15L9.4 10.6L8 12zm-9 5V3h6.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H21v18zm9.538-16.963q.212-.212.212-.537t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212t.538-.213");
}
</style><path class="miobbts6d"/>`,
		"fallback": "material-symbols:assignment-returned-sharp",
	});
}

export default Component;
