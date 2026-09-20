import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr2u00bms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xr2u00bms"/>`,
		"fallback": "tabler:badge-filled",
	});
}

export default Component;
