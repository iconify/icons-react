import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_4qcfbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_4qcfbib"/>`,
		"fallback": "boxicons:group",
	});
}

export default Component;
