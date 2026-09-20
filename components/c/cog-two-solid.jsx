import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjva_kt4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjva_kt4j"/>`,
		"fallback": "mynaui:cog-two-solid",
	});
}

export default Component;
