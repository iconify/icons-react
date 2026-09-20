import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7agr4acm.css';
import '../../css/r/r8hicpb_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7agr4acm"/><path class="r8hicpb_n"/>`,
		"fallback": "si:file-upload-fill",
	});
}

export default Component;
