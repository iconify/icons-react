import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ric394m0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ric394m0k"/>`,
		"fallback": "cbi:ikea-remtang2",
	});
}

export default Component;
