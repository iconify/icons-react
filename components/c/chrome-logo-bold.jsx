import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv3bsr2xr.css';
import '../../css/m/mbclv28jg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv3bsr2xr"/><path class="mbclv28jg"/>`,
		"fallback": "streamline-ultimate:chrome-logo-bold",
	});
}

export default Component;
