import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sjz4eilgc {
  fill: currentColor;
  d: path("M32.06 8.19a1.5 1.5 0 0 1 0 2.12L18.622 23.75l13.44 13.44a1.5 1.5 0 0 1-2.122 2.12l-14.5-14.5a1.5 1.5 0 0 1 0-2.12l14.5-14.5a1.5 1.5 0 0 1 2.122 0");
}
</style><path class="sjz4eilgc"/>`,
		"fallback": "fluent:chevron-left-48-filled",
	});
}

export default Component;
