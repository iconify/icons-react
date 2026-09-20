import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvmhjo25r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lvmhjo25r"/>`,
		"fallback": "ix:create-plant",
	});
}

export default Component;
