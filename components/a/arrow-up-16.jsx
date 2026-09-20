import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uow89ebbx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uow89ebbx"/>`,
		"fallback": "qlementine-icons:arrow-up-16",
	});
}

export default Component;
