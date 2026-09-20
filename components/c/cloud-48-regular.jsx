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
		"content": `<style>.dxw0asb9h {
  fill: currentColor;
  d: path("M24 11.5a9.5 9.5 0 0 0-9.497 9.721a1.25 1.25 0 0 1-1.25 1.279H11.5a6 6 0 0 0 0 12h25a6 6 0 0 0 0-12h-1.753a1.25 1.25 0 0 1-1.25-1.279q.003-.11.003-.221a9.5 9.5 0 0 0-9.5-9.5M12.041 20C12.55 13.84 17.71 9 24 9s11.45 4.84 11.959 11h.541a8.5 8.5 0 0 1 0 17h-25a8.5 8.5 0 0 1 0-17z");
}
</style><path class="dxw0asb9h"/>`,
		"fallback": "fluent:cloud-48-regular",
	});
}

export default Component;
