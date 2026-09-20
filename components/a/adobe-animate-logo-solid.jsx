import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv2o3kbcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qv2o3kbcf"/>`,
		"fallback": "streamline-logos:adobe-animate-logo-solid",
	});
}

export default Component;
