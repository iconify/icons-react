import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo4_cfbnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo4_cfbnf"/>`,
		"fallback": "guidance:down-arrow",
	});
}

export default Component;
