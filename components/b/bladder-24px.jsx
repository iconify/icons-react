import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y43w_db0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y43w_db0l"/>`,
		"fallback": "healthicons:bladder-24px",
	});
}

export default Component;
