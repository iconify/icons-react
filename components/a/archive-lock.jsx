import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf30up41c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf30up41c"/>`,
		"fallback": "noviair:archive-lock",
	});
}

export default Component;
