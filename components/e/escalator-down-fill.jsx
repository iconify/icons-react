import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.padx4eb0o {
  fill: currentColor;
  d: path("M170.34 85.66a8 8 0 0 1 11.32-11.32L192 84.69V48a8 8 0 0 1 16 0v36.69l10.34-10.35a8 8 0 0 1 11.32 11.32l-24 24a8 8 0 0 1-11.32 0ZM224 144h-36.5L93.88 42.57A8 8 0 0 0 88 40H32a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h36.5l93.62 101.43A8 8 0 0 0 168 216h56a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16");
}
</style><path class="padx4eb0o"/>`,
		"fallback": "ph:escalator-down-fill",
	});
}

export default Component;
