import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks3m9vbsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks3m9vbsj"/>`,
		"fallback": "tabler:building-pin",
	});
}

export default Component;
