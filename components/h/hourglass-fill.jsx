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
		"content": `<style>.zfxqjccim {
  fill: currentColor;
  d: path("M5 2h14a1 1 0 0 1 0 2h-1v2c0 1.039-.578 1.992-1.293 2.707L13.414 12l3.293 3.293C17.422 16.008 18 16.961 18 18v2h1a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h1v-2c0-1.039.578-1.992 1.293-2.707L10.586 12L7.293 8.707C6.578 7.992 6 7.039 6 6V4H5a1 1 0 0 1 0-2");
}
</style><path class="zfxqjccim"/>`,
		"fallback": "coolicons:hourglass-fill",
	});
}

export default Component;
