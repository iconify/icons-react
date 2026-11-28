import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxsh7ebsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxsh7ebsl"/>`,
		"fallback": "iconaut:edit-solid",
	});
}

export default Component;
