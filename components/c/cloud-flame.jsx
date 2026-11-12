import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnsz9xlwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnsz9xlwp"/>`,
		"fallback": "tabler:cloud-flame",
	});
}

export default Component;
