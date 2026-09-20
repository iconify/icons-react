import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai4s28y9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ai4s28y9i"/>`,
		"fallback": "reicon:comment-check-filled",
	});
}

export default Component;
