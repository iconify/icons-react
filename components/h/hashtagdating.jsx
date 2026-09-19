import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.owgmmcb3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 40.5c0 1.108-.892 2-2 2H24C13.783 42.5 5.5 34.217 5.5 24S13.783 5.5 24 5.5S42.5 13.783 42.5 24zM22.587 18.07l14.772 2.605m-25.719 7.65l23.635 4.168m-2.783-18.769l-4.168 23.635m-9.212-16.855l-2.605 14.772");
}

.vjr6z-bqg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.675 11.64l-1.042 5.909l-5.909-1.042");
}
</style><path class="owgmmcb3s"/><path class="vjr6z-bqg"/>`,
		"fallback": "arcticons:hashtagdating",
	});
}

export default Component;
