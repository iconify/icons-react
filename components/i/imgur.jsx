import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0pqhea9a.css';
import '../../css/z/zoadec5pq.css';
import '../../css/z/zb2w8cc6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0pqhea9a"/><path class="zoadec5pq"/><path class="zb2w8cc6p"/>`,
		"fallback": "pixel:imgur",
	});
}

export default Component;
