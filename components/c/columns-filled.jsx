import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9kw14ayb.css';
import '../../css/w/wzt-b-bph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="q9kw14ayb"/><rect class="wzt-b-bph"/>`,
		"fallback": "boxicons:columns-filled",
	});
}

export default Component;
