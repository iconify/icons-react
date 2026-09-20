import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdkkj5bbn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdkkj5bbn"/>`,
		"fallback": "la:code-branch",
	});
}

export default Component;
