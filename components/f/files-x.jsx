import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7resrb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7resrb6g"/>`,
		"fallback": "noviair:files-x",
	});
}

export default Component;
