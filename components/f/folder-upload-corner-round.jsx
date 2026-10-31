import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gldvn3z1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gldvn3z1n"/>`,
		"fallback": "coolicons:folder-upload-corner-round",
	});
}

export default Component;
