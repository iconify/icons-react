import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orle7obbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="orle7obbv"/>`,
		"fallback": "hugeicons:circle-small",
	});
}

export default Component;
