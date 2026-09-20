import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6m6l-blr.css';
import '../../css/a/add8fqwim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6m6l-blr"/><path class="add8fqwim"/>`,
		"fallback": "stash:article-light",
	});
}

export default Component;
