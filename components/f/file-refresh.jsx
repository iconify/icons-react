import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwmw_7gsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwmw_7gsz"/>`,
		"fallback": "mdi:file-refresh",
	});
}

export default Component;
