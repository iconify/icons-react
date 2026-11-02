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
		"content": `<style>.ruag071sm {
  fill: currentColor;
  d: path("M5 2h6a3 3 0 0 1 3 3v6h1a3 3 0 0 1 3 3v1a1 1 0 0 0 2 0V8c0-.468-.395-.98-.707-1.293l-2-2a.999.999 0 1 1 1.414-1.414l2 2C21.422 6.008 22 6.961 22 8v7a3 3 0 1 1-6 0v-1a.997.997 0 0 0-1-1h-1v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m4.8 6.6a1 1 0 0 0-1.6-1.2l-3 4A.999.999 0 0 0 6 13h2l-1.8 2.4a1 1 0 0 0 1.6 1.2l3-4A.999.999 0 0 0 10 11H8Z");
}
</style><path class="ruag071sm"/>`,
		"fallback": "coolicons:charging-station-fill",
	});
}

export default Component;
