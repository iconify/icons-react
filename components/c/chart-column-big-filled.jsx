import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sozdzcb0a.css';
import '../../css/v/vvjesyy_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sozdzcb0a"/><path class="vvjesyy_r"/>`,
		"fallback": "lucide-extended:chart-column-big-filled",
	});
}

export default Component;
