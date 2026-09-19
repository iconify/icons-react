import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgt5jg9jy.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgt5jg9jy"/>`,
		"fallback": "whh:breakable",
	});
}

export default Component;
