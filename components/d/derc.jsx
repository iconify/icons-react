import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmj18yb6f.css';
import '../../css/t/tfqe-pf5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmj18yb6f"/><path class="tfqe-pf5n"/>`,
		"fallback": "token:derc",
	});
}

export default Component;
