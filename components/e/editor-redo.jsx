import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y237edcyd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y237edcyd"/>`,
		"fallback": "oui:editor-redo",
	});
}

export default Component;
