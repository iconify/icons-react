import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_r1k3bls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_r1k3bls"/>`,
		"fallback": "thesvg-color:apache-doris",
	});
}

export default Component;
