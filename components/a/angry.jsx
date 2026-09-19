import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljhi_bcxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljhi_bcxj"/>`,
		"fallback": "bxs:angry",
	});
}

export default Component;
