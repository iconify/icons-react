import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kngeejbzc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kngeejbzc"/>`,
		"fallback": "streamline-flex:feather-pen-solid",
	});
}

export default Component;
