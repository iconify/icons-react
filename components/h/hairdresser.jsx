import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lznn-3o3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lznn-3o3r"/>`,
		"fallback": "guidance:hairdresser",
	});
}

export default Component;
