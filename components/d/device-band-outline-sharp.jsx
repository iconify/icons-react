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
		"content": `<style>.q7wixs2-u {
  fill: currentColor;
  d: path("M8.866 21V8.73h-.693V6.77h.693V3h6.25v3.77h.692v1.96h-.692V21zm1-12.75V20h4.25V8.25zm0-1h4.25V4h-4.25zm0 1h4.25zm0-1h4.25z");
}
</style><path class="q7wixs2-u"/>`,
		"fallback": "material-symbols-light:device-band-outline-sharp",
	});
}

export default Component;
