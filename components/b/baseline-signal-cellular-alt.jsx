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
		"content": `<style>.p1fnx2bzc {
  fill: currentColor;
  d: path("M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z");
}
</style><path class="p1fnx2bzc"/>`,
		"fallback": "ic:baseline-signal-cellular-alt",
	});
}

export default Component;
