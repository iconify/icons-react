import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkzg49b6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkzg49b6g"/>`,
		"fallback": "lucide:bot-off",
	});
}

export default Component;
