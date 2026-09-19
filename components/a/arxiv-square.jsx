import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvbzddb7t.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvbzddb7t"/>`,
		"fallback": "academicons:arxiv-square",
	});
}

export default Component;
