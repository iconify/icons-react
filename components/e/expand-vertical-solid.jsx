import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kaxmk38pt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kaxmk38pt"/>`,
		"fallback": "iconaut:expand-vertical-solid",
	});
}

export default Component;
