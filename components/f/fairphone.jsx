import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgy01obqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgy01obqu"/>`,
		"fallback": "thesvg-color:fairphone",
	});
}

export default Component;
