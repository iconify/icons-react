import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf-ely3-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf-ely3-s"/>`,
		"fallback": "keyline-icons:grid-squares-duotone",
	});
}

export default Component;
