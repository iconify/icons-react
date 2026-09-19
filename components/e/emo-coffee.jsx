import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni-w6_bxa.css';

const viewBox = {"width":1673,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni-w6_bxa"/>`,
		"fallback": "fontelico:emo-coffee",
	});
}

export default Component;
