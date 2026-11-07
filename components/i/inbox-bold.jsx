import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k98gnnbfh.css';
import '../../css/v/voeniibqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k98gnnbfh"/><path class="voeniibqc"/>`,
		"fallback": "solar:inbox-bold",
	});
}

export default Component;
