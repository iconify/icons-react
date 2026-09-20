import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db-naac_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="db-naac_t"/>`,
		"fallback": "streamline-sharp-color:fingerprint-2-flat",
	});
}

export default Component;
