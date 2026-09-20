import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy80e3meu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy80e3meu"/>`,
		"fallback": "streamline-flex:input-box",
	});
}

export default Component;
