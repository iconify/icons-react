import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2w0dmuau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t2w0dmuau"/>`,
		"fallback": "griddy-icons:cube-alt-02-filled",
	});
}

export default Component;
