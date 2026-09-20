import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxarz0beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxarz0beq"/>`,
		"fallback": "reicon:arrow-up-3-filled",
	});
}

export default Component;
