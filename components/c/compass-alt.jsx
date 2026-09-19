import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcev4bc-t.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcev4bc-t"/>`,
		"fallback": "el:compass-alt",
	});
}

export default Component;
