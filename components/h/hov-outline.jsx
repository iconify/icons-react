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
		"content": `<style>.clo0pwgdq {
  fill: currentColor;
  d: path("M12 22L6 12l6-10l6 10zm0-3.9l3.675-6.1L12 5.9L8.325 12zm0-6.1");
}
</style><path class="clo0pwgdq"/>`,
		"fallback": "material-symbols:hov-outline",
	});
}

export default Component;
