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
		"content": `<style>.jk42opb5j {
  fill: currentColor;
  d: path("M12 9.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M8 12a4 4 0 1 1 8 0a4 4 0 0 1-8 0");
}
</style><path class="jk42opb5j"/>`,
		"fallback": "fluent:circle-small-24-regular",
	});
}

export default Component;
