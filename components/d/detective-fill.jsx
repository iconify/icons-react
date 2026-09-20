import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bx29u0bso {
  fill: currentColor;
  d: path("M256 120a8 8 0 0 1-8 8H8a8 8 0 0 1 0-16h27.92l47.5-65.41a16 16 0 0 1 25.31-.72l12.85 14.9l.2.23a7.95 7.95 0 0 0 12.44 0l.2-.23l12.85-14.9a16 16 0 0 1 25.31.72l47.5 65.41H248a8 8 0 0 1 8 8m-76 24a36 36 0 0 0-35.77 32h-32.46a36 36 0 1 0-1.83 16h36.12A36 36 0 1 0 180 144");
}
</style><path class="bx29u0bso"/>`,
		"fallback": "ph:detective-fill",
	});
}

export default Component;
