import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bffzsd8ed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bffzsd8ed"/>`,
		"fallback": "iconaut:forward-arrow-solid",
	});
}

export default Component;
