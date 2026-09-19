import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nil35lbrw.css';

const viewBox = {"width":543,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nil35lbrw"/>`,
		"fallback": "ls:ink",
	});
}

export default Component;
