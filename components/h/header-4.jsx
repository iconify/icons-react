import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgve9iglu.css';

const viewBox = {"width":24,"height":24,"left":-4.5,"top":-7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgve9iglu"/>`,
		"fallback": "jam:header-4",
	});
}

export default Component;
