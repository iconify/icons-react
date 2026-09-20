import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chzw86e4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chzw86e4n"/>`,
		"fallback": "thesvg-color:doi",
	});
}

export default Component;
