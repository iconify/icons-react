import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf78fhlzv.css';
import '../../css/t/tvyzckmsa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="kf78fhlzv"/><path class="tvyzckmsa"/>`,
		"fallback": "selfhst:doska",
	});
}

export default Component;
