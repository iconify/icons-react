import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx668v65z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tx668v65z"/>`,
		"fallback": "reicon:book4-filled",
	});
}

export default Component;
