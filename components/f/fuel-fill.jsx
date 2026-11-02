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
		"content": `<style>.jv1v5sbjf {
  fill: currentColor;
  d: path("M14 8H2V5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3Zm0 5v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9h12v1h1a3 3 0 0 1 3 3v1a1 1 0 0 0 2 0V8c0-.468-.395-.98-.707-1.293l-2-2a.999.999 0 1 1 1.414-1.414l2 2C21.422 6.008 22 6.961 22 8v7a3 3 0 1 1-6 0v-1a.997.997 0 0 0-1-1Z");
}
</style><path class="jv1v5sbjf"/>`,
		"fallback": "coolicons:fuel-fill",
	});
}

export default Component;
