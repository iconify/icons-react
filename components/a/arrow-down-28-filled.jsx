import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s21adrbxu {
  fill: currentColor;
  d: path("M23.712 15.703a1 1 0 0 0-1.423-1.406l-7.288 7.376V3.998a1 1 0 1 0-2 0v17.673l-7.287-7.374a1 1 0 0 0-1.422 1.406l8.82 8.927a1.25 1.25 0 0 0 1.779 0z");
}
</style><path class="s21adrbxu"/>`,
		"fallback": "fluent:arrow-down-28-filled",
	});
}

export default Component;
