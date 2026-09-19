import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvfhn7b8l.css';

const viewBox = {"width":999,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvfhn7b8l"/>`,
		"fallback": "fontelico:emo-unhappy",
	});
}

export default Component;
