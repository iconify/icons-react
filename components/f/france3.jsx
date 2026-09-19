import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iao0xe98k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iao0xe98k"/>`,
		"fallback": "cbi:france3",
	});
}

export default Component;
