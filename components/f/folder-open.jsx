import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfq52yqkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfq52yqkf"/>`,
		"fallback": "noviair:folder-open",
	});
}

export default Component;
