import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbo-9nggs.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbo-9nggs"/>`,
		"fallback": "whh:gravefour",
	});
}

export default Component;
