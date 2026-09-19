import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yft_2jb0w.css';
import '../../css/t/t476j_etv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yft_2jb0w"/><path class="t476j_etv"/>`,
		"fallback": "boxicons:copy-check-filled",
	});
}

export default Component;
