import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9e5wubrv.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9e5wubrv"/>`,
		"fallback": "fontelico:crown",
	});
}

export default Component;
