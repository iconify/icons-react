import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk6g9lbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wk6g9lbxc"/>`,
		"fallback": "streamline-logos:affinity-designer-logo-block",
	});
}

export default Component;
