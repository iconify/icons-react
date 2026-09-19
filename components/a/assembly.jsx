import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbfi7hipm.css';
import '../../css/a/amdrwrbxn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="jbfi7hipm"/><path class="amdrwrbxn"/>`,
		"fallback": "catppuccin:assembly",
	});
}

export default Component;
