import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv322cbjc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zv322cbjc"/>`,
		"fallback": "streamline-flex:drone-solid",
	});
}

export default Component;
