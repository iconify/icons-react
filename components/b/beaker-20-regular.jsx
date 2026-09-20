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
		"content": `<style>.j8zyxkh-u {
  fill: currentColor;
  d: path("M14 3a.5.5 0 0 1 0 1h-.996v4.684c0 .58.144 1.15.42 1.66l2.395 4.446a1.5 1.5 0 0 1-1.32 2.212H5.502a1.5 1.5 0 0 1-1.32-2.212l2.394-4.443a3.5 3.5 0 0 0 .418-1.66V4H6a.5.5 0 0 1 0-1zM7.994 4v4.687a4.5 4.5 0 0 1-.538 2.134L6.821 12h6.359l-.637-1.181a4.5 4.5 0 0 1-.539-2.135V4zm5.724 9H6.282l-1.22 2.264a.5.5 0 0 0 .44.738h8.997a.5.5 0 0 0 .44-.738z");
}
</style><path class="j8zyxkh-u"/>`,
		"fallback": "fluent:beaker-20-regular",
	});
}

export default Component;
