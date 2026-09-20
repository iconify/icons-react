import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a24b_-4jq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a24b_-4jq"/>`,
		"fallback": "stash:folder-alt-light",
	});
}

export default Component;
