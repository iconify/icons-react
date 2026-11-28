import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niekoc4bl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="niekoc4bl"/>`,
		"fallback": "noviair:checkbox",
	});
}

export default Component;
