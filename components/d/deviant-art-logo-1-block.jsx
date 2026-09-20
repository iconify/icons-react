import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8r1e1_by.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g8r1e1_by"/>`,
		"fallback": "streamline-logos:deviant-art-logo-1-block",
	});
}

export default Component;
