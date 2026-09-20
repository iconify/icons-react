import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqr4zbbdb.css';
import '../../css/k/kmp8rebtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqr4zbbdb"/><path class="kmp8rebtm"/>`,
		"fallback": "mage:coin-b-fill",
	});
}

export default Component;
