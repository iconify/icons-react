import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm0i6fb7x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm0i6fb7x"/>`,
		"fallback": "pinhead:5-minus",
	});
}

export default Component;
