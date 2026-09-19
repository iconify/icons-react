import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7kh2ac5e.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7kh2ac5e"/>`,
		"fallback": "f7:folder-fill-badge-person-crop",
	});
}

export default Component;
