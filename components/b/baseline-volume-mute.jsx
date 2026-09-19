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
		"content": `<style>.xs8_ejdrv {
  fill: currentColor;
  d: path("M7 9v6h4l5 5V4l-5 5z");
}
</style><path class="xs8_ejdrv"/>`,
		"fallback": "ic:baseline-volume-mute",
	});
}

export default Component;
