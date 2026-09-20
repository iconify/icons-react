import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/daaah39dx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="daaah39dx"/>`,
		"fallback": "tabler:box-align-top-filled",
	});
}

export default Component;
