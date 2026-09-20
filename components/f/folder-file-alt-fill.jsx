import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqcbebh-l.css';
import '../../css/v/v5tal47iw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xqcbebh-l"/><path class="v5tal47iw"/>`,
		"fallback": "lets-icons:folder-file-alt-fill",
	});
}

export default Component;
