import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd3uh_z7z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd3uh_z7z"/>`,
		"fallback": "garden:arrow-up-box-stroke-16",
	});
}

export default Component;
