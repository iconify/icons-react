import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eieyf_ezi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eieyf_ezi"/>`,
		"fallback": "streamline-flex:camping-tent-remix",
	});
}

export default Component;
