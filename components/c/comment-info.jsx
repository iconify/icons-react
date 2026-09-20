import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gawx2ac1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gawx2ac1x"/>`,
		"fallback": "uil:comment-info",
	});
}

export default Component;
