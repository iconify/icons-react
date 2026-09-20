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
		"content": `<style>.i505rwb9n {
  d: path("M5.172 3h13.656v3.724H5.172zm0 8.069h12.414v3.724h-8.69V21H5.173z");
}
</style><path class="i505rwb9n"/>`,
		"fallback": "token-branded:fore",
	});
}

export default Component;
