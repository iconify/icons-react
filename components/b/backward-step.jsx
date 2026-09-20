import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cutf4dd8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cutf4dd8q"/>`,
		"fallback": "reicon:backward-step",
	});
}

export default Component;
