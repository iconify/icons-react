import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxyp99b3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxyp99b3z"/>`,
		"fallback": "noviair:files-check",
	});
}

export default Component;
