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
		"content": `<style>.m7di3tz7j {
  fill: currentColor;
  d: path("M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h64a8 8 0 0 0 5.66-2.34L128 179.31l26.34 26.35A8 8 0 0 0 160 208h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M80 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96 0a24 24 0 1 1 24-24a24 24 0 0 1-24 24");
}
</style><path class="m7di3tz7j"/>`,
		"fallback": "ph:google-cardboard-logo-fill",
	});
}

export default Component;
