import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k8mnxpbnz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11 3h-1a4 4 0 0 0-3.874 3H6a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 11 3M7.676 8l.387-1.501A2 2 0 0 1 10 5h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 14 12H6a2 2 0 1 1 0-4z");
}
</style><path clip-rule="evenodd" class="k8mnxpbnz"/>`,
		"fallback": "pepicons-pop:cloud",
	});
}

export default Component;
