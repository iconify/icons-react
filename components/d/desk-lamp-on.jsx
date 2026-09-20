import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/taeho6whc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="taeho6whc"/>`,
		"fallback": "mdi:desk-lamp-on",
	});
}

export default Component;
