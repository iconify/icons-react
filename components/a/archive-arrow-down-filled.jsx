import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv_zv7bwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv_zv7bwq"/>`,
		"fallback": "boxicons:archive-arrow-down-filled",
	});
}

export default Component;
