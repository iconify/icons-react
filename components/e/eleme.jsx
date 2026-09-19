import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly7-gdbvh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly7-gdbvh"/>`,
		"fallback": "ep:eleme",
	});
}

export default Component;
