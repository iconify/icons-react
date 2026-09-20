import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5hd9r9ep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5hd9r9ep"/>`,
		"fallback": "streamline-sharp:arrow-transfer-horizontal-large-1",
	});
}

export default Component;
