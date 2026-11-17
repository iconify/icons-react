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
		"content": `<style>.rj7k19dpu {
  fill: currentColor;
  d: path("M3 17v-5.185a5 5 0 0 1 1.707-3.763l4-3.5a5 5 0 0 1 6.586 0l4 3.5A5 5 0 0 1 21 11.815V17a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5m10.8-7.4a1 1 0 0 0-1.6-1.2l-3 4A.999.999 0 0 0 10 14h2l-1.8 2.4a1 1 0 0 0 1.6 1.2l3-4A.999.999 0 0 0 14 12h-2Z");
}
</style><path class="rj7k19dpu"/>`,
		"fallback": "coolicons:house-zap-fill-round",
	});
}

export default Component;
