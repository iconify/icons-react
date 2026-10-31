import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_vw0tbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_vw0tbqh"/>`,
		"fallback": "coolicons:blockquote-fill-round",
	});
}

export default Component;
