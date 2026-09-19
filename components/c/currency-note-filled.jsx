import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_80cab1p.css';
import '../../css/a/aps6ewwol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_80cab1p"/><path class="aps6ewwol"/>`,
		"fallback": "boxicons:currency-note-filled",
	});
}

export default Component;
