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
		"content": `<style>.otil38bqp {
  fill: currentColor;
  d: path("M2 20L12 4l10 16z");
}
</style><path class="otil38bqp"/>`,
		"fallback": "material-symbols:change-history",
	});
}

export default Component;
