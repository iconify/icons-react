import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvzhtd08i.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvzhtd08i"/>`,
		"fallback": "picon:duck",
	});
}

export default Component;
