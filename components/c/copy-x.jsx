import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpo3e-h9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpo3e-h9s"/>`,
		"fallback": "noviair:copy-x",
	});
}

export default Component;
