import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si58bs_sb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si58bs_sb"/>`,
		"fallback": "thesvg-color:domo",
	});
}

export default Component;
