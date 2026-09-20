import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmouqvb-x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bmouqvb-x"/>`,
		"fallback": "streamline-flex:galaxy-2-solid",
	});
}

export default Component;
