import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_o1j080n.css';

const viewBox = {"width":819,"height":727};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_o1j080n"/>`,
		"fallback": "ls:cinnamon",
	});
}

export default Component;
