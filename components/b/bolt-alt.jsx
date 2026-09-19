import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gacfu6b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gacfu6b-k"/>`,
		"fallback": "boxicons:bolt-alt",
	});
}

export default Component;
