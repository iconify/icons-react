import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tat1wobpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tat1wobpc"/>`,
		"fallback": "proicons:hat-graduation",
	});
}

export default Component;
