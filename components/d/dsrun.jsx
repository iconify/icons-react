import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duyij83lt.css';
import '../../css/s/snztlmsub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duyij83lt"/><path class="snztlmsub"/>`,
		"fallback": "token:dsrun",
	});
}

export default Component;
