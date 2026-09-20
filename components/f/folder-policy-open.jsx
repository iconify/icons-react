import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8r7eptda.css';
import '../../css/w/wsrr0dbxg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8r7eptda"/><path class="wsrr0dbxg"/>`,
		"fallback": "material-icon-theme:folder-policy-open",
	});
}

export default Component;
