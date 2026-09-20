import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t8sdbab6k {
  fill: currentColor;
  d: path("M4.03 5.507a4 4 0 0 1 7.94 0A3.25 3.25 0 0 1 11.75 12h-7.5a3.25 3.25 0 0 1-.22-6.493");
}
</style><path class="t8sdbab6k"/>`,
		"fallback": "fluent:cloud-16-filled",
	});
}

export default Component;
