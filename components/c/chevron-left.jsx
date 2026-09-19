import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpq8ief7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpq8ief7u"/>`,
		"fallback": "codex:chevron-left",
	});
}

export default Component;
