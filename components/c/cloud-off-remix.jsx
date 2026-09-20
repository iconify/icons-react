import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kag54lbaq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kag54lbaq"/>`,
		"fallback": "streamline-flex:cloud-off-remix",
	});
}

export default Component;
