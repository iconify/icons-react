import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_jabp8zg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_jabp8zg"/>`,
		"fallback": "streamline-ultimate:common-file-edit",
	});
}

export default Component;
