import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ztgc_1bpx {
  fill: currentColor;
  d: path("M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm1 3h12v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zm4.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z");
}
</style><path class="ztgc_1bpx"/>`,
		"fallback": "fluent:archive-16-filled",
	});
}

export default Component;
