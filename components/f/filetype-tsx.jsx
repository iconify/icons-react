import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq-4ybc2l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq-4ybc2l"/>`,
		"fallback": "bi:filetype-tsx",
	});
}

export default Component;
