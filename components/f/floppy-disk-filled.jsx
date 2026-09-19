import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq59b2bwe.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq59b2bwe"/>`,
		"fallback": "dinkie-icons:floppy-disk-filled",
	});
}

export default Component;
