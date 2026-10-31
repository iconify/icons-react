import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1om5ryxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1om5ryxt"/>`,
		"fallback": "coolicons:info-round",
	});
}

export default Component;
