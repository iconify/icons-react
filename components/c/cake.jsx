import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu73t8y-x.css';

const viewBox = {"width":456,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu73t8y-x"/>`,
		"fallback": "file-icons:cake",
	});
}

export default Component;
