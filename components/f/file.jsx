import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7d2p-b0v.css';
import '../../css/m/mp5nlkbxv.css';
import '../../css/z/zupd9frtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7d2p-b0v"/><path class="mp5nlkbxv"/><path class="zupd9frtd"/>`,
		"fallback": "withicons-bauhaus:file",
	});
}

export default Component;
