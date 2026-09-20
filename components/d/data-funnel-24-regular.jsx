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
		"content": `<style>.ufv3qrm3f {
  fill: currentColor;
  d: path("M22.002 4.752a2.75 2.75 0 0 1-2.752 2.752H4.752a2.752 2.752 0 1 1 0-5.504H19.25a2.75 2.75 0 0 1 2.752 2.752m-2 7a2.75 2.75 0 0 1-2.752 2.752H6.752a2.752 2.752 0 1 1 0-5.504H17.25a2.75 2.75 0 0 1 2.752 2.752m-3 7a2.75 2.75 0 0 1-2.752 2.752H9.752a2.752 2.752 0 1 1 0-5.504h4.498a2.75 2.75 0 0 1 2.752 2.752m3.5-14c0-.692-.56-1.252-1.252-1.252H4.752a1.252 1.252 0 1 0 0 2.504H19.25c.692 0 1.252-.56 1.252-1.252m-2 7c0-.692-.56-1.252-1.252-1.252H6.752a1.252 1.252 0 0 0 0 2.504H17.25c.692 0 1.252-.56 1.252-1.252m-3 7c0-.691-.56-1.252-1.252-1.252H9.752a1.252 1.252 0 0 0 0 2.504h4.498c.691 0 1.252-.56 1.252-1.252");
}
</style><path class="ufv3qrm3f"/>`,
		"fallback": "fluent:data-funnel-24-regular",
	});
}

export default Component;
