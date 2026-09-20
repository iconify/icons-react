import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si_qkgb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si_qkgb7c"/>`,
		"fallback": "reicon:bag-cross2-filled",
	});
}

export default Component;
