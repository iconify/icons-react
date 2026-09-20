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
		"content": `<style>.vy08hvb3i {
  fill: currentColor;
  d: path("m140.24 132.24l-80 80a6 6 0 0 1-8.48-8.48L127.51 128L51.76 52.24a6 6 0 0 1 8.48-8.48l80 80a6 6 0 0 1 0 8.48m80-8.48l-80-80a6 6 0 0 0-8.48 8.48L207.51 128l-75.75 75.76a6 6 0 1 0 8.48 8.48l80-80a6 6 0 0 0 0-8.48");
}
</style><path class="vy08hvb3i"/>`,
		"fallback": "ph:caret-double-right-light",
	});
}

export default Component;
