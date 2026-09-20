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
		"content": `<style>.fc3-n8clw {
  fill: currentColor;
  d: path("m21 18.15l-15-15V1h9l6 6zm-.5 5.15L16.2 19H6V8.8L.7 3.5l1.4-1.4l19.8 19.8zM14 8h5.5L14 2.5L19.5 8L14 2.5zM2 23V8h2v13h12v2z");
}
</style><path class="fc3-n8clw"/>`,
		"fallback": "material-symbols:file-copy-off-sharp",
	});
}

export default Component;
