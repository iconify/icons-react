import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la8s9ccyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la8s9ccyl"/>`,
		"fallback": "thesvg-color:google-cloud-spanner",
	});
}

export default Component;
