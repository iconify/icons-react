import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxpg19b9p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxpg19b9p"/>`,
		"fallback": "pinhead:commercial-building",
	});
}

export default Component;
