import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd2v57b1m.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd2v57b1m"/>`,
		"fallback": "dinkie-icons:circle-small-filled",
	});
}

export default Component;
