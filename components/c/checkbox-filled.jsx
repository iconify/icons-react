import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhsdat93n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="xhsdat93n"/>`,
		"fallback": "boxicons:checkbox-filled",
	});
}

export default Component;
