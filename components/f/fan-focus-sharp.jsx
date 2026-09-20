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
		"content": `<style>.br_1d9wzb {
  fill: currentColor;
  d: path("m12 22l-3.5-3.5l1.4-1.4l1.1 1.075V12h2v6.175l1.1-1.075l1.4 1.4zm-6-4l-3.5-3.5l1.4-1.4L5 14.175V8h2v6.175L8.1 13.1l1.4 1.4zm12 0l-3.5-3.5l1.4-1.4l1.1 1.075V8h2v6.175l1.1-1.075l1.4 1.4zM2 11V3h20v8h-2V5H4v6z");
}
</style><path class="br_1d9wzb"/>`,
		"fallback": "material-symbols:fan-focus-sharp",
	});
}

export default Component;
