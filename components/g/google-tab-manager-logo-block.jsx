import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsctvp7wz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jsctvp7wz"/>`,
		"fallback": "streamline-logos:google-tab-manager-logo-block",
	});
}

export default Component;
