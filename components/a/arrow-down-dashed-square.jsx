import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww19cizxo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww19cizxo"/>`,
		"fallback": "streamline:arrow-down-dashed-square",
	});
}

export default Component;
