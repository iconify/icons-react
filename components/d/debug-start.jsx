import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voyl-4j-h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voyl-4j-h"/>`,
		"fallback": "codicon:debug-start",
	});
}

export default Component;
