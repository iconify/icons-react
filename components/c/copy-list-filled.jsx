import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yft_2jb0w.css';
import '../../css/i/iwsz-9ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yft_2jb0w"/><path class="iwsz-9ben"/>`,
		"fallback": "boxicons:copy-list-filled",
	});
}

export default Component;
