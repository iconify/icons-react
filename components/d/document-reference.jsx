import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpe4mlbbn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpe4mlbbn"/>`,
		"fallback": "ix:document-reference",
	});
}

export default Component;
