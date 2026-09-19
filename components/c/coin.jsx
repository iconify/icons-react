import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tay3aacfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tay3aacfd"/>`,
		"fallback": "bxs:coin",
	});
}

export default Component;
