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
		"content": `<style>.d_hez3nxm {
  fill: currentColor;
  d: path("M5.75 4A2.75 2.75 0 0 0 3 6.75v5.3a2.5 2.5 0 0 0 0 4.9v2.3a.75.75 0 0 0 1.5 0V17h15v2.25a.75.75 0 0 0 1.5 0v-2.3a2.5 2.5 0 0 0 0-4.9v-5.3A2.75 2.75 0 0 0 18.25 4zm13.75 8h-15V6.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25zm1 3.5h-17a1 1 0 1 1 0-2h17a1 1 0 1 1 0 2");
}
</style><path class="d_hez3nxm"/>`,
		"fallback": "fluent:bench-24-regular",
	});
}

export default Component;
