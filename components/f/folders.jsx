import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq3z2ybyr.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq3z2ybyr"/>`,
		"fallback": "picon:folders",
	});
}

export default Component;
