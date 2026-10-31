import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bal2iqxhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bal2iqxhb"/>`,
		"fallback": "coolicons:church-fill-round",
	});
}

export default Component;
