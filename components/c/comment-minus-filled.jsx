import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwso4ubnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kwso4ubnp"/>`,
		"fallback": "reicon:comment-minus-filled",
	});
}

export default Component;
