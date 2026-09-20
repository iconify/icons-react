import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb2p06bmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb2p06bmn"/>`,
		"fallback": "mynaui:folder-slash-solid",
	});
}

export default Component;
