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
		"content": `<style>.gqwbhnb3z {
  d: path("M216.008 66H174V56a22.025 22.025 0 0 0-22-22h-48a22.025 22.025 0 0 0-22 22v10H40.008a14.016 14.016 0 0 0-14 14v128a14.016 14.016 0 0 0 14 14h176a14.016 14.016 0 0 0 14-14V80a14.016 14.016 0 0 0-14-14zM94 56a10.011 10.011 0 0 1 10-10h48a10.011 10.011 0 0 1 10 10v10H94zm124.008 152a2.003 2.003 0 0 1-2 2h-176a2.003 2.003 0 0 1-2-2V80a2.003 2.003 0 0 1 2-2h176a2.003 2.003 0 0 1 2 2z");
  fill: currentColor;
}
</style><path class="gqwbhnb3z"/>`,
		"fallback": "ph:briefcase-simple-light",
	});
}

export default Component;
