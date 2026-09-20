import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lohj11b2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lohj11b2u"/>`,
		"fallback": "thesvg-color:foundry-virtual-tabletop",
	});
}

export default Component;
