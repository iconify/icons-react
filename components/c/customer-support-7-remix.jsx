import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnwtwf3ww.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qnwtwf3ww"/>`,
		"fallback": "streamline-flex:customer-support-7-remix",
	});
}

export default Component;
