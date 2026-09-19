import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbru0zywf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbru0zywf"/>`,
		"fallback": "boxicons:briefcase",
	});
}

export default Component;
