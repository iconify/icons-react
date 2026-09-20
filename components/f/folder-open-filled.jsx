import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqrwg2b1m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqrwg2b1m"/>`,
		"fallback": "ix:folder-open-filled",
	});
}

export default Component;
