import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zba_mr_xo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zba_mr_xo"/>`,
		"fallback": "reicon:droplet-filled",
	});
}

export default Component;
