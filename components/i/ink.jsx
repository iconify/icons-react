import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh9wtob0q.css';

const viewBox = {"width":962,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh9wtob0q"/>`,
		"fallback": "whh:ink",
	});
}

export default Component;
