import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtca2iexn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtca2iexn"/>`,
		"fallback": "cbi:aqara-dw-p2",
	});
}

export default Component;
