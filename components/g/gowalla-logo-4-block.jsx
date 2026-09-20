import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw4mo75jm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aw4mo75jm"/>`,
		"fallback": "streamline-logos:gowalla-logo-4-block",
	});
}

export default Component;
