import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrx5gqidn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mrx5gqidn"/>`,
		"fallback": "streamline-logos:fedora-logo-block",
	});
}

export default Component;
