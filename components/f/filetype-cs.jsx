import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7l4nmb3y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7l4nmb3y"/>`,
		"fallback": "bi:filetype-cs",
	});
}

export default Component;
