import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izxbt9bnw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izxbt9bnw"/>`,
		"fallback": "dinkie-icons:desktop-computer-small-filled",
	});
}

export default Component;
