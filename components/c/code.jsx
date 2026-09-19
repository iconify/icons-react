import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po-nq2spx.css';

const viewBox = {"width":1856,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po-nq2spx"/>`,
		"fallback": "fa:code",
	});
}

export default Component;
