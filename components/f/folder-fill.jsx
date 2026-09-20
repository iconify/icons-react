import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzbf_mj_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzbf_mj_p"/>`,
		"fallback": "mingcute:folder-fill",
	});
}

export default Component;
