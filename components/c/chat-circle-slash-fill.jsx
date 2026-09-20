import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yxlymac4g {
  fill: currentColor;
  d: path("M213.92 210.62a8 8 0 1 1-11.84 10.76l-10.26-11.29a104 104 0 0 1-112.7 9.73l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104.06 104.06 0 0 1 52.33 56.66L42.08 45.38a8 8 0 1 1 11.84-10.76ZM128 24a103.4 103.4 0 0 0-40.33 8.11a8 8 0 0 0-2.81 12.75l121.8 134a8 8 0 0 0 13-1.59A104 104 0 0 0 128 24");
}
</style><path class="yxlymac4g"/>`,
		"fallback": "ph:chat-circle-slash-fill",
	});
}

export default Component;
