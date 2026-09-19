import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwe1t7bjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwe1t7bjf"/>`,
		"fallback": "boxicons:horizontal-distribute-center",
	});
}

export default Component;
