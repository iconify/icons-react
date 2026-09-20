import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbd9pswha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbd9pswha"/>`,
		"fallback": "uil:comment-exclamation",
	});
}

export default Component;
