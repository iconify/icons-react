import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz7exac3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz7exac3f"/>`,
		"fallback": "tdesign:error-circle-filled",
	});
}

export default Component;
