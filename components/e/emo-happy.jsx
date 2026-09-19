import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5yg-621y.css';

const viewBox = {"width":999,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5yg-621y"/>`,
		"fallback": "fontelico:emo-happy",
	});
}

export default Component;
