import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn30zibei.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn30zibei"/>`,
		"fallback": "pinhead:briefcase-with-open-book",
	});
}

export default Component;
