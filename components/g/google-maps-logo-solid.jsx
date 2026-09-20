import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar8r-icbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ar8r-icbi"/>`,
		"fallback": "streamline-logos:google-maps-logo-solid",
	});
}

export default Component;
