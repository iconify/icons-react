import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkj7k3nbl.css';
import '../../css/h/hnfc23bbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkj7k3nbl"/><path clip-rule="evenodd" class="hnfc23bbd"/>`,
		"fallback": "solar:export-bold-duotone",
	});
}

export default Component;
