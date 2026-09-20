import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzj5ptbxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzj5ptbxd"/>`,
		"fallback": "mdi-light:chart-line",
	});
}

export default Component;
