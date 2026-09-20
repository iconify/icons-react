import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu1p-ob8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu1p-ob8n"/>`,
		"fallback": "tabler:battery-vertical-3-filled",
	});
}

export default Component;
