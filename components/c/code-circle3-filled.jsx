import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw_vlx9eg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw_vlx9eg"/>`,
		"fallback": "reicon:code-circle3-filled",
	});
}

export default Component;
