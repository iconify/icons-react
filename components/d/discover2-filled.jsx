import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztg_pfb8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztg_pfb8n"/>`,
		"fallback": "reicon:discover2-filled",
	});
}

export default Component;
