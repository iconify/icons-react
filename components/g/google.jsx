import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eftaeeh0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eftaeeh0k"/>`,
		"fallback": "bxl:google",
	});
}

export default Component;
