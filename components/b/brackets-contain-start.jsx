import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl9cvpbxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl9cvpbxl"/>`,
		"fallback": "tabler:brackets-contain-start",
	});
}

export default Component;
