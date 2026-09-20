import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amtdspbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amtdspbus"/>`,
		"fallback": "tabler:a-b",
	});
}

export default Component;
