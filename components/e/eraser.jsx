import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i50zk7duk.css';
import '../../css/a/a_3ga6bbw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i50zk7duk"/><path class="a_3ga6bbw"/>`,
		"fallback": "oui:eraser",
	});
}

export default Component;
