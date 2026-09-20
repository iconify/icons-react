import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjvs6cczp.css';

const viewBox = {"width":24,"height":24,"left":-3.5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjvs6cczp"/>`,
		"fallback": "jam:apple",
	});
}

export default Component;
