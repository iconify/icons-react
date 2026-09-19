import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-g2gdbgn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-g2gdbgn"/>`,
		"fallback": "codicon:fish3-very-sad",
	});
}

export default Component;
