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
		"content": `<style>.gl2zztbtx {
  fill: currentColor;
  d: path("M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5zm3.97 12.41c-1.84 2.17-5.21 2.1-6.96-.07c-2.19-2.72-.65-6.72 2.69-7.33c.34-.06.63.27.51.6c-.46 1.23-.39 2.64.32 3.86a4.51 4.51 0 0 0 3.18 2.2c.34.05.49.47.26.74");
}
</style><path class="gl2zztbtx"/>`,
		"fallback": "ic:baseline-shield-moon",
	});
}

export default Component;
