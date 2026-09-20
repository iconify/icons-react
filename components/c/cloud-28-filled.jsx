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
		"content": `<style>.dboq9ubmq {
  fill: currentColor;
  d: path("M14 5a7 7 0 0 0-6.931 6.017A5.5 5.5 0 0 0 7.5 22h13a5.5 5.5 0 0 0 .431-10.983A7 7 0 0 0 14 5");
}
</style><path class="dboq9ubmq"/>`,
		"fallback": "fluent:cloud-28-filled",
	});
}

export default Component;
