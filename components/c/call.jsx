import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm-3lhb1s.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm-3lhb1s"/>`,
		"fallback": "picon:call",
	});
}

export default Component;
