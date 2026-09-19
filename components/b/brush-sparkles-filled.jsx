import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itva-1bmg.css';
import '../../css/o/o6y24yasb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itva-1bmg"/><path class="o6y24yasb"/>`,
		"fallback": "boxicons:brush-sparkles-filled",
	});
}

export default Component;
