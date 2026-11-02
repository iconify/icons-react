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
		"content": `<style>.fqh3h0phu {
  fill: currentColor;
  d: path("M14 18h-4a2 2 0 0 1-2-2v-4H5a1.25 1.25 0 0 1-.582-.14c-.712-.371-.835-1.242-.549-1.932c.098-.237.242-.453.424-.635l6-6a2.414 2.414 0 0 1 3.414 0l6 6c.182.182.326.398.424.635c.286.69.163 1.561-.549 1.932c-.18.093-.379.141-.582.14h-3v4a2 2 0 0 1-2 2m1 4H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2");
}
</style><path class="fqh3h0phu"/>`,
		"fallback": "coolicons:caps-lock-fill",
	});
}

export default Component;
