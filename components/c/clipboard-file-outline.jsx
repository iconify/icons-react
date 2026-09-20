import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj8c_hskw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj8c_hskw"/>`,
		"fallback": "mdi:clipboard-file-outline",
	});
}

export default Component;
