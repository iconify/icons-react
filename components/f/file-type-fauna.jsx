import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xdx_7e5yi {
  fill: var(--svg-color--323fcb, #323fcb);
  d: path("m4.682 2l14.035 11.191l2.428-3.122l6.173-1.248l-3.118 5.133v6.589L7.341 30l4.439-7.237L16 20.058l-4.22.971l-3.953-6.451L15.6 16.59l-8.67-4.232Z");
}
</style><path class="xdx_7e5yi"/>`,
		"fallback": "vscode-icons:file-type-fauna",
	});
}

export default Component;
