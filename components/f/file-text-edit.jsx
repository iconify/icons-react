import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrc1pubwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrc1pubwn"/>`,
		"fallback": "noviair:file-text-edit",
	});
}

export default Component;
