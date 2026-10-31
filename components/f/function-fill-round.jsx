import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz6ri2bgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz6ri2bgv"/>`,
		"fallback": "coolicons:function-fill-round",
	});
}

export default Component;
