import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7rjambcu.css';
import '../../css/a/au92l6bjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7rjambcu"/><path class="au92l6bjr"/>`,
		"fallback": "token:anubis",
	});
}

export default Component;
