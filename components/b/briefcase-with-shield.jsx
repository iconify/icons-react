import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm7kq5o3t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm7kq5o3t"/>`,
		"fallback": "pinhead:briefcase-with-shield",
	});
}

export default Component;
