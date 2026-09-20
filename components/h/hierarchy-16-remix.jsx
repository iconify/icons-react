import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnq2fg_cw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xnq2fg_cw"/>`,
		"fallback": "streamline-flex:hierarchy-16-remix",
	});
}

export default Component;
