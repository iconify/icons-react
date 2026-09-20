import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xclepl4_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xclepl4_l"/>`,
		"fallback": "thesvg:baiducloud",
	});
}

export default Component;
