import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihhsa8u5z.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihhsa8u5z"/>`,
		"fallback": "academicons:crossref-square",
	});
}

export default Component;
