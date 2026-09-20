import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w91s3cc_n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w91s3cc_n"/>`,
		"fallback": "pinhead:6-minus",
	});
}

export default Component;
