import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh6grdblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh6grdblp"/>`,
		"fallback": "solar:end-call-bold",
	});
}

export default Component;
