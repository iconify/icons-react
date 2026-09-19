import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3mrqjpwv.css';
import '../../css/y/yft_2jb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="i3mrqjpwv"/><path class="yft_2jb0w"/>`,
		"fallback": "boxicons:copy-filled",
	});
}

export default Component;
