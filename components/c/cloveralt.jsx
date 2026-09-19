import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g--9au63c.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g--9au63c"/>`,
		"fallback": "whh:cloveralt",
	});
}

export default Component;
