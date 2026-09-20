import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjy-gzb2q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gjy-gzb2q"/>`,
		"fallback": "ix:cloud-rain-filled",
	});
}

export default Component;
