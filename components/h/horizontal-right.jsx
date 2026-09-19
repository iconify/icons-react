import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqc49ei0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqc49ei0y"/>`,
		"fallback": "bx:horizontal-right",
	});
}

export default Component;
