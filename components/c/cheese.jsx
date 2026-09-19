import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-ng6m2uq.css';
import '../../css/j/j87piqd4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-ng6m2uq"/><path class="j87piqd4o"/>`,
		"fallback": "boxicons:cheese",
	});
}

export default Component;
