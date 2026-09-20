import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1vh_fbve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1vh_fbve"/>`,
		"fallback": "stash:ellipsis-h",
	});
}

export default Component;
