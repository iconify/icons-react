import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnfj03b2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnfj03b2s"/>`,
		"fallback": "reicon:cloud3-filled",
	});
}

export default Component;
