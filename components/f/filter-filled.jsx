import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic74sqb3a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic74sqb3a"/>`,
		"fallback": "codicon:filter-filled",
	});
}

export default Component;
