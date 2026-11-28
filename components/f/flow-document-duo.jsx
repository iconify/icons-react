import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4qsytige.css';
import '../../css/i/i3jzowbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4qsytige secondary"/><path class="i3jzowbmb primary"/>`,
		"fallback": "iconaut:flow-document-duo",
	});
}

export default Component;
