import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0ps87buk.css';

const viewBox = {"width":1024,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0ps87buk"/>`,
		"fallback": "whh:bowtie",
	});
}

export default Component;
