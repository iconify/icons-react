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
		"content": `<style>.am7d_ybhm {
  fill: currentColor;
  d: path("M204 96a76 76 0 1 0-80 75.89V204H88a4 4 0 0 0 0 8h36v28a4 4 0 0 0 8 0v-28h36a4 4 0 0 0 0-8h-36v-32.11A76.09 76.09 0 0 0 204 96M60 96a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68");
}
</style><path class="am7d_ybhm"/>`,
		"fallback": "ph:gender-female-thin",
	});
}

export default Component;
