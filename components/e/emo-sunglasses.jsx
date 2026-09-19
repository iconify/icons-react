import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnvj_8bao.css';

const viewBox = {"width":990,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnvj_8bao"/>`,
		"fallback": "fontelico:emo-sunglasses",
	});
}

export default Component;
