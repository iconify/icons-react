import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqi_j-b4x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wqi_j-b4x"/>`,
		"fallback": "streamline-flex:fork-knife-solid",
	});
}

export default Component;
