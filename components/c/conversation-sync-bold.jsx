import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4q401bqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4q401bqu"/>`,
		"fallback": "streamline-ultimate:conversation-sync-bold",
	});
}

export default Component;
