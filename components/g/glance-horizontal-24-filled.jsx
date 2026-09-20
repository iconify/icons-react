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
		"content": `<style>.wor7kgbbd {
  fill: currentColor;
  d: path("M13.001 4.752a1.75 1.75 0 0 0-1.75-1.75h-6.5a1.75 1.75 0 0 0-1.75 1.75v4.5c0 .966.784 1.75 1.75 1.75h6.5a1.75 1.75 0 0 0 1.75-1.75zM8.99 14.734a1.75 1.75 0 0 0-1.75-1.75H4.75A1.75 1.75 0 0 0 3 14.734v4.514c0 .967.784 1.75 1.75 1.75h2.49a1.75 1.75 0 0 0 1.75-1.75zm12.014.014a1.75 1.75 0 0 0-1.75-1.75h-6.5a1.75 1.75 0 0 0-1.744 1.607l-.006.143v4.5c0 .967.783 1.75 1.75 1.75h6.5a1.75 1.75 0 0 0 1.75-1.75zm0-9.996a1.75 1.75 0 0 0-1.75-1.75h-2.5a1.75 1.75 0 0 0-1.75 1.75v4.5c0 .966.783 1.75 1.75 1.75h2.5a1.75 1.75 0 0 0 1.75-1.75z");
}
</style><path class="wor7kgbbd"/>`,
		"fallback": "fluent:glance-horizontal-24-filled",
	});
}

export default Component;
