import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhyb5_bnw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhyb5_bnw"/>`,
		"fallback": "whh:emailforward",
	});
}

export default Component;
