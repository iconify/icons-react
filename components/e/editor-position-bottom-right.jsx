import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zci6vmbii.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zci6vmbii"/>`,
		"fallback": "oui:editor-position-bottom-right",
	});
}

export default Component;
