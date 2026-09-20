import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1ixcvbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1ixcvbvn"/>`,
		"fallback": "thesvg-color:apache",
	});
}

export default Component;
