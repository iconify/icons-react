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
		"content": `<style>.jhl31stdw {
  fill: currentColor;
  d: path("M6 1a2 2 0 0 0-2 2v4.5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm0 9.5a2 2 0 0 0-2 2V17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4.5a2 2 0 0 0-2-2z");
}
</style><path class="jhl31stdw"/>`,
		"fallback": "fluent:align-space-fit-vertical-20-filled",
	});
}

export default Component;
