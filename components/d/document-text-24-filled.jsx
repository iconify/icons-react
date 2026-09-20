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
		"content": `<style>.qmc3vzdtd {
  fill: currentColor;
  d: path("M12 8V2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2m-3.75 3.5h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5m0 2.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5m0 2.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5m5.25-9V2.5l6 6H14a.5.5 0 0 1-.5-.5");
}
</style><path class="qmc3vzdtd"/>`,
		"fallback": "fluent:document-text-24-filled",
	});
}

export default Component;
