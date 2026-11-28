import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfhbzf_nd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfhbzf_nd"/>`,
		"fallback": "iconaut:copyleft-solid",
	});
}

export default Component;
