import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rys5o5b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rys5o5b-k"/>`,
		"fallback": "token:fitfi",
	});
}

export default Component;
