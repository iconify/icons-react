import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iktdgbbbq.css';

const viewBox = {"width":888,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iktdgbbbq"/>`,
		"fallback": "fontelico:emo-sleep",
	});
}

export default Component;
