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
		"content": `<style>.wf72qccdc {
  fill: currentColor;
  d: path("M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V8h16zM8 13.01l1.41 1.41L11 12.84V17h2v-4.16l1.59 1.59L16 13.01L12.01 9z");
}
</style><path class="wf72qccdc"/>`,
		"fallback": "ic:baseline-drive-folder-upload",
	});
}

export default Component;
