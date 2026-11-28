import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxtb7cbts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxtb7cbts"/>`,
		"fallback": "noviair:archive-check",
	});
}

export default Component;
