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
		"content": `<style>.s9z6bcl7p {
  fill: currentColor;
  d: path("M3.75 2a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zm4.78 2.72a.75.75 0 0 0-1.06 0L4.22 7.97a.75.75 0 0 0 1.06 1.06l1.97-1.97v6.19a.75.75 0 0 0 1.5 0V7.06l1.97 1.97a.75.75 0 1 0 1.06-1.06z");
}
</style><path class="s9z6bcl7p"/>`,
		"fallback": "fluent:arrow-upload-16-filled",
	});
}

export default Component;
