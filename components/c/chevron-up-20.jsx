import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf0z_fbub.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf0z_fbub"/>`,
		"fallback": "garden:chevron-up-20",
	});
}

export default Component;
