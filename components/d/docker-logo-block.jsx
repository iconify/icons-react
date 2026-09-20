import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asn3kcb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="asn3kcb6m"/>`,
		"fallback": "streamline-logos:docker-logo-block",
	});
}

export default Component;
