import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gef3jd1-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gef3jd1-j"/>`,
		"fallback": "coolicons:cloud-moon-fill-round",
	});
}

export default Component;
