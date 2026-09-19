import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xulhkp85g.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xulhkp85g"/>`,
		"fallback": "whh:icecreamthree",
	});
}

export default Component;
