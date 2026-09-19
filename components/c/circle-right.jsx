import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqik6r9ar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqik6r9ar"/>`,
		"fallback": "ci:circle-right",
	});
}

export default Component;
