import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukw4jy4tx.css';
import '../../css/s/sgoebkv5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukw4jy4tx"/><path class="sgoebkv5i"/>`,
		"fallback": "boxicons:arrow-in-right-square-half-filled",
	});
}

export default Component;
