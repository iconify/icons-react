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
		"content": `<style>.c5ous8yjq {
  fill: currentColor;
  d: path("M6.08 8.02a6.001 6.001 0 0 1 11.84 0a4.5 4.5 0 0 1 4.053 4.973A6.5 6.5 0 0 0 10.018 17H6.5a4.5 4.5 0 0 1-.42-8.982M22 16.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M16.5 13a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5m0 7.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25");
}
</style><path class="c5ous8yjq"/>`,
		"fallback": "fluent:cloud-error-24-filled",
	});
}

export default Component;
