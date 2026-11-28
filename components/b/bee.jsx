import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amhv56bqt.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amhv56bqt"/>`,
		"fallback": "pullo:bee",
	});
}

export default Component;
