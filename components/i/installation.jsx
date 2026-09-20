import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2euhubpp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2euhubpp"/>`,
		"fallback": "material-icon-theme:installation",
	});
}

export default Component;
