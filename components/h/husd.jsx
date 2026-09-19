import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thf47n7_n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thf47n7_n"/>`,
		"fallback": "cryptocurrency:husd",
	});
}

export default Component;
