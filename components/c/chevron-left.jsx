import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx-o6nbsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx-o6nbsr"/>`,
		"fallback": "mono-icons:chevron-left",
	});
}

export default Component;
