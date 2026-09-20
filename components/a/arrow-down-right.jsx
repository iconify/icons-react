import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4q2x981q.css';
import '../../css/x/xg4x14bqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4q2x981q"/><path class="xg4x14bqu"/>`,
		"fallback": "uim:arrow-down-right",
	});
}

export default Component;
