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
		"content": `<style>.jf0m9byjo {
  fill: currentColor;
  d: path("m4.846 21l-.9-3.02H3V6.02h.966L4.846 3h4.308l.862 3.02H11v11.96h-.985L9.154 21zm.731-1h2.827l.55-2.02H5.008zM4 16.98h6V7.02H4zM5.027 6.02h3.908L8.404 4H5.577zM14.75 21V8.73h-.692V6.77h.692V3H21v3.77h.692v1.96H21V21zm1-12.75V20H20V8.25zm0-1H20V4h-4.25zM6.98 6.02");
}
</style><path class="jf0m9byjo"/>`,
		"fallback": "material-symbols-light:fitness-trackers-outline-sharp",
	});
}

export default Component;
