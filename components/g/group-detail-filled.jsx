import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfk6fpb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfk6fpb2q"/>`,
		"fallback": "weui:group-detail-filled",
	});
}

export default Component;
