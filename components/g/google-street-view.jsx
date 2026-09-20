import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cek597b9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cek597b9n"/>`,
		"fallback": "thesvg-color:google-street-view",
	});
}

export default Component;
