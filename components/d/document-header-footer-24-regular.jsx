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
		"content": `<style>.ze2-u0dit {
  fill: currentColor;
  d: path("M7.005 6.505a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 0 3h-7a1.5 1.5 0 0 1-1.5-1.5m0 11a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 1 1 0 3h-7a1.5 1.5 0 0 1-1.5-1.5m12.99-13.409A2.25 2.25 0 0 0 17.75 2H6.25l-.154.005A2.25 2.25 0 0 0 4 4.25v15.5l.005.154A2.25 2.25 0 0 0 6.25 22h11.5l.154-.005A2.25 2.25 0 0 0 20 19.75V4.25zM6.25 3.5h11.5l.102.007a.75.75 0 0 1 .648.743v15.5l-.007.102a.75.75 0 0 1-.743.648H6.25l-.102-.007a.75.75 0 0 1-.648-.743V4.25l.007-.102A.75.75 0 0 1 6.25 3.5");
}
</style><path class="ze2-u0dit"/>`,
		"fallback": "fluent:document-header-footer-24-regular",
	});
}

export default Component;
