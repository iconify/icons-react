import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjqk92b5i.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjqk92b5i"/>`,
		"fallback": "fad:automation-2p",
	});
}

export default Component;
