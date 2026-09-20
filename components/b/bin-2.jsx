import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwpfszb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwpfszb3n"/>`,
		"fallback": "streamline-cyber:bin-2",
	});
}

export default Component;
