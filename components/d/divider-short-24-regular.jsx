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
		"content": `<style>.rmazx7dse {
  fill: currentColor;
  d: path("M11.25 4.75v14.5a.75.75 0 0 0 1.5 0V4.75a.75.75 0 0 0-1.5 0");
}
</style><path class="rmazx7dse"/>`,
		"fallback": "fluent:divider-short-24-regular",
	});
}

export default Component;
