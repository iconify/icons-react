import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn7h7bcbz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hn7h7bcbz"/>`,
		"fallback": "streamline:computer-chip-2-solid",
	});
}

export default Component;
