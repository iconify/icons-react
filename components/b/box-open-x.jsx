import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlc_h_b0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlc_h_b0o"/>`,
		"fallback": "noviair:box-open-x",
	});
}

export default Component;
