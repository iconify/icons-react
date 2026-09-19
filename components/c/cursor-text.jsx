import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq4pumlsw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq4pumlsw"/>`,
		"fallback": "bi:cursor-text",
	});
}

export default Component;
