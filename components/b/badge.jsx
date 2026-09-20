import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkec0kb0p.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkec0kb0p"/>`,
		"fallback": "picon:badge",
	});
}

export default Component;
