import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdfdcabao.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdfdcabao"/>`,
		"fallback": "pinhead:electrical-current-transformer-and-bolt",
	});
}

export default Component;
