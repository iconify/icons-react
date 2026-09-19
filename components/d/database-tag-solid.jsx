import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpng5jbol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bpng5jbol"/>`,
		"fallback": "iconoir:database-tag-solid",
	});
}

export default Component;
