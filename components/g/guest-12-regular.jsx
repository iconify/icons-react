import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ye4cfsemu {
  fill: currentColor;
  d: path("M3.5 1A1.5 1.5 0 0 0 2 2.5v7A1.5 1.5 0 0 0 3.5 11h5A1.5 1.5 0 0 0 10 9.5v-7A1.5 1.5 0 0 0 8.5 1zM3 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5zm3 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2M4.5 7a.5.5 0 0 0-.5.5C4 8.5 5 9 6 9s2-.5 2-1.5a.5.5 0 0 0-.5-.5zm1-4.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z");
}
</style><path class="ye4cfsemu"/>`,
		"fallback": "fluent:guest-12-regular",
	});
}

export default Component;
