import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz1n9qbid.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz1n9qbid"/>`,
		"fallback": "cryptocurrency:cmm",
	});
}

export default Component;
