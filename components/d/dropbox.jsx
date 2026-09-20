import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qane7acao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qane7acao"/>`,
		"fallback": "uil:dropbox",
	});
}

export default Component;
