import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m28-rvb-j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m28-rvb-j"/>`,
		"fallback": "pinhead:briefcase-with-info-i",
	});
}

export default Component;
