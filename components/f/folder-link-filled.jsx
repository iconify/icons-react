import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9oa3ab1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k9oa3ab1w"/>`,
		"fallback": "reicon:folder-link-filled",
	});
}

export default Component;
