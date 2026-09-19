import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkr04ob9s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkr04ob9s"/>`,
		"fallback": "codicon:copy",
	});
}

export default Component;
