import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf_c2vbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf_c2vbdq"/>`,
		"fallback": "withicons-bauhaus:infinity",
	});
}

export default Component;
