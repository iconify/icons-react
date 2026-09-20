import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu4coba6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu4coba6u"/>`,
		"fallback": "streamline-ultimate:allowances-smoking-bold",
	});
}

export default Component;
