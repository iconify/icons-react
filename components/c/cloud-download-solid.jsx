import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6sn_6h4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6sn_6h4t"/>`,
		"fallback": "pixel:cloud-download-solid",
	});
}

export default Component;
