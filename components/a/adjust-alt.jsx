import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqsh6n6fl.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqsh6n6fl"/>`,
		"fallback": "el:adjust-alt",
	});
}

export default Component;
