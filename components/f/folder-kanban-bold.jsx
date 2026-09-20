import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp2p8cbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zp2p8cbjs"/>`,
		"fallback": "solar:folder-kanban-bold",
	});
}

export default Component;
