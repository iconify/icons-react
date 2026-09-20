import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3b91b08f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l3b91b08f"/>`,
		"fallback": "solar:bone-crack-outline",
	});
}

export default Component;
