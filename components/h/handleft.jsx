import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnszv0-fo.css';

const viewBox = {"width":1024,"height":704};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnszv0-fo"/>`,
		"fallback": "whh:handleft",
	});
}

export default Component;
