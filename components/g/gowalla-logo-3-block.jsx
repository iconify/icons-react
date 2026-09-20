import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq3c38dxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xq3c38dxf"/>`,
		"fallback": "streamline-logos:gowalla-logo-3-block",
	});
}

export default Component;
