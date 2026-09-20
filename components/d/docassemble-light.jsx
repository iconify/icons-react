import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc83tyb0q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc83tyb0q"/>`,
		"fallback": "selfhst:docassemble-light",
	});
}

export default Component;
