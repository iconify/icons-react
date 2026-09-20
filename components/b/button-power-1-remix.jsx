import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxgh1_bzn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yxgh1_bzn"/>`,
		"fallback": "streamline-flex:button-power-1-remix",
	});
}

export default Component;
