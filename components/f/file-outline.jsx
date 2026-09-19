import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-msdc2cb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-msdc2cb"/>`,
		"fallback": "eva:file-outline",
	});
}

export default Component;
