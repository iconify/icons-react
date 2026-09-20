import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq56kppzf.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq56kppzf"/>`,
		"fallback": "oi:account-logout",
	});
}

export default Component;
