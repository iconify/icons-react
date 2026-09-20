import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko4fmo4iw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko4fmo4iw"/>`,
		"fallback": "subway:cercle-6",
	});
}

export default Component;
