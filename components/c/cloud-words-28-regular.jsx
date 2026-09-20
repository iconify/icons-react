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
		"content": `<style>.ovbnf_b3p {
  fill: currentColor;
  d: path("M8.504 11.78a5.5 5.5 0 0 1 10.992 0a.75.75 0 0 0 .75.72h.254a4 4 0 0 1 0 8h-13a4 4 0 0 1 0-8h.255a.75.75 0 0 0 .75-.72M14 5a7 7 0 0 0-6.931 6.017A5.5 5.5 0 0 0 7.5 22h13a5.5 5.5 0 0 0 .431-10.983A7 7 0 0 0 14 5m-2.25 5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM6 16.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m9.75-.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="ovbnf_b3p"/>`,
		"fallback": "fluent:cloud-words-28-regular",
	});
}

export default Component;
