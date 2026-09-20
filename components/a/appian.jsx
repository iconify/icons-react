import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckb0debyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckb0debyn"/>`,
		"fallback": "thesvg-color:appian",
	});
}

export default Component;
