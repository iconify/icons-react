import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-k2eg3fw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t-k2eg3fw"/>`,
		"fallback": "stash:drag-squares-horizontal-light",
	});
}

export default Component;
