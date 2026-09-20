import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn_zwgrde.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nn_zwgrde"/>`,
		"fallback": "ix:comment-alt",
	});
}

export default Component;
