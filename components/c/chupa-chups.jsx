import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inz6rjbmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inz6rjbmn"/>`,
		"fallback": "thesvg-color:chupa-chups",
	});
}

export default Component;
