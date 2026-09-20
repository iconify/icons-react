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
		"content": `<style>.owftpb1bx {
  fill: currentColor;
  d: path("M15.94 39.31a1.5 1.5 0 0 1 0-2.12l13.439-13.44l-13.44-13.44a1.5 1.5 0 0 1 2.122-2.12l14.5 14.5a1.5 1.5 0 0 1 0 2.12l-14.5 14.5a1.5 1.5 0 0 1-2.122 0");
}
</style><path class="owftpb1bx"/>`,
		"fallback": "fluent:chevron-right-48-filled",
	});
}

export default Component;
