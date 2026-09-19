import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-msuac5k.css';

const viewBox = {"width":1447,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-msuac5k"/>`,
		"fallback": "fontelico:emo-thumbsup",
	});
}

export default Component;
