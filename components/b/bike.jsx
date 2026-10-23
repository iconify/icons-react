import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgi5qbc8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgi5qbc8b"/>`,
		"fallback": "vadivam:bike",
	});
}

export default Component;
