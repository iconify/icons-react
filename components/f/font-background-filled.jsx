import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwwfp2bnd.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwwfp2bnd"/>`,
		"fallback": "tdesign:font-background-filled",
	});
}

export default Component;
