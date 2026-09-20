import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veec_dbhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veec_dbhf"/>`,
		"fallback": "mdi:image-text",
	});
}

export default Component;
