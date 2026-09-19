import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8f0fw_qe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8f0fw_qe"/>`,
		"fallback": "codicon:collection",
	});
}

export default Component;
