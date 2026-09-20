import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhg495fle.css';
import '../../css/w/wsrr0dbxg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhg495fle"/><path class="wsrr0dbxg"/>`,
		"fallback": "material-icon-theme:folder-policy",
	});
}

export default Component;
