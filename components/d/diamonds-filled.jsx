import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq-8wibaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq-8wibaj"/>`,
		"fallback": "boxicons:diamonds-filled",
	});
}

export default Component;
