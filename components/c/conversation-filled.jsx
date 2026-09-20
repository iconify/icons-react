import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk6089bek.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bk6089bek"/>`,
		"fallback": "ix:conversation-filled",
	});
}

export default Component;
