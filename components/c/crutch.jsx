import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwq7ipbum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwq7ipbum"/>`,
		"fallback": "guidance:crutch",
	});
}

export default Component;
