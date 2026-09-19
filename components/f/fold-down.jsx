import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thui0ru5m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thui0ru5m"/>`,
		"fallback": "codicon:fold-down",
	});
}

export default Component;
