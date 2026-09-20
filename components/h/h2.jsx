import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmv0jrv6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmv0jrv6b"/>`,
		"fallback": "pixel:h2",
	});
}

export default Component;
