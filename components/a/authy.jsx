import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv5pv62hg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv5pv62hg"/>`,
		"fallback": "simple-icons:authy",
	});
}

export default Component;
