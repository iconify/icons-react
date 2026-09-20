import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-2s0cbsw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-2s0cbsw"/>`,
		"fallback": "pinhead:conifer-tree",
	});
}

export default Component;
