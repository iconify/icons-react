import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8u1v1b5n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8u1v1b5n"/>`,
		"fallback": "icomoon-free:appleinc",
	});
}

export default Component;
