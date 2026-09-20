import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_zh3nbon.css';
import '../../css/f/f-euyubsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_zh3nbon"/><path class="f-euyubsh"/>`,
		"fallback": "mage:inbox-question-mark-fill",
	});
}

export default Component;
