import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgq-hoi-s.css';
import '../../css/b/bqo7skq6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgq-hoi-s"/><path class="bqo7skq6r"/>`,
		"fallback": "tdesign:folder-search-filled",
	});
}

export default Component;
