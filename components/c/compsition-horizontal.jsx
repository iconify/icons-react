import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg6_6qt2f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg6_6qt2f"/>`,
		"fallback": "streamline-flex:compsition-horizontal",
	});
}

export default Component;
