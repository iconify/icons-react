import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppab5wbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppab5wbpv"/>`,
		"fallback": "humbleicons:certificate-check",
	});
}

export default Component;
