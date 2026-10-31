import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wljf69bys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wljf69bys"/>`,
		"fallback": "coolicons:heading-5-round",
	});
}

export default Component;
