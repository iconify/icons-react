import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfcst0bpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfcst0bpp"/>`,
		"fallback": "ci:credit-card-01",
	});
}

export default Component;
