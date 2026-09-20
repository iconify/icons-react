import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbi57gbxm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wbi57gbxm"/>`,
		"fallback": "streamline-flex:archive-box-solid",
	});
}

export default Component;
