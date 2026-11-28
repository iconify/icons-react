import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9oeji4xy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9oeji4xy"/>`,
		"fallback": "noviair:flag-finish-check",
	});
}

export default Component;
