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
		"content": `<style>.z0sghcbxe {
  fill: currentColor;
  d: path("M4 8h2v9H4v2a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Zm4 9V8h9a5 5 0 0 1 5 5v6a1 1 0 0 1-2 0v-2Z");
}
</style><path class="z0sghcbxe"/>`,
		"fallback": "coolicons:bed-fill-round",
	});
}

export default Component;
