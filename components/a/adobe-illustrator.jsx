import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvcanoprh.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvcanoprh"/>`,
		"fallback": "dinkie-icons:adobe-illustrator",
	});
}

export default Component;
