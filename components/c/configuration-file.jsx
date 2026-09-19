import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xatnruabq.css';
import '../../css/y/ynuha5bfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xatnruabq"/><path class="ynuha5bfz"/>`,
		"fallback": "eos-icons:configuration-file",
	});
}

export default Component;
