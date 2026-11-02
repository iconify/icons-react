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
		"content": `<style>.vrxr1rk6g {
  fill: currentColor;
  d: path("M6 11.586V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v13h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h1v-4c0-1.039.578-1.992 1.293-2.707ZM18 6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3.586l.293-.293a2.414 2.414 0 0 1 3.414 0l3 3C15.422 13.008 16 13.961 16 15v4h2Z");
}
</style><path class="vrxr1rk6g"/>`,
		"fallback": "coolicons:building-3-fill",
	});
}

export default Component;
