import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xads-bcdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xads-bcdp"/>`,
		"fallback": "mdi:file-exchange-outline",
	});
}

export default Component;
