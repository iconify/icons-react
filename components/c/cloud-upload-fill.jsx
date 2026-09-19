import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbj2ozb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xbj2ozb2q"/>`,
		"fallback": "iconamoon:cloud-upload-fill",
	});
}

export default Component;
