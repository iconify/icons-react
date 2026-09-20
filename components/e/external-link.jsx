import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4amp7bme.css';
import '../../css/n/nnh_4z2za.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4amp7bme"/><path class="nnh_4z2za"/>`,
		"fallback": "pixel:external-link",
	});
}

export default Component;
