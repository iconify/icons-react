import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqtmd9bae.css';

const viewBox = {"width":640,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqtmd9bae"/>`,
		"fallback": "whh:boardgame",
	});
}

export default Component;
