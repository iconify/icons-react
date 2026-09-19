import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdi_z7bbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdi_z7bbh"/>`,
		"fallback": "iconamoon:close-square-bold",
	});
}

export default Component;
