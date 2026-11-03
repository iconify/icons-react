import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhrg1ac9g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhrg1ac9g"/>`,
		"fallback": "devicon-plain:dialogflow",
	});
}

export default Component;
