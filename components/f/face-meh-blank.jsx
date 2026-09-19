import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyw2gn6tx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyw2gn6tx"/>`,
		"fallback": "fa6-regular:face-meh-blank",
	});
}

export default Component;
