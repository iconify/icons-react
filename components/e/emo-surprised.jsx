import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu6mqqb7h.css';

const viewBox = {"width":696,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu6mqqb7h"/>`,
		"fallback": "fontelico:emo-surprised",
	});
}

export default Component;
