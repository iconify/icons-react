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
		"content": `<style>.yl0-wszaf {
  fill: currentColor;
  d: path("M12.75 3h-1.5L6.5 14h2.1l.9-2.2h5l.9 2.2h2.1zm-2.62 7L12 4.98L13.87 10zm10.37 8l-3-3v2H5v2h12.5v2z");
}
</style><path class="yl0-wszaf"/>`,
		"fallback": "ic:baseline-text-rotation-none",
	});
}

export default Component;
