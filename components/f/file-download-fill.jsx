import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3va__60v.css';
import '../../css/r/r8hicpb_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3va__60v"/><path class="r8hicpb_n"/>`,
		"fallback": "si:file-download-fill",
	});
}

export default Component;
