import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcnhb3tjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcnhb3tjy"/>`,
		"fallback": "mdi:death-star",
	});
}

export default Component;
