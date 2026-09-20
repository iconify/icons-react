import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gll1qohkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gll1qohkf"/>`,
		"fallback": "lets-icons:chart-fill",
	});
}

export default Component;
