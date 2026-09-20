import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxvf2ubem.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vxvf2ubem"/>`,
		"fallback": "pajamas:collapse-right",
	});
}

export default Component;
