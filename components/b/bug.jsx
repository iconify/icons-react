import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoac7cc0m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoac7cc0m"/>`,
		"fallback": "oui:bug",
	});
}

export default Component;
