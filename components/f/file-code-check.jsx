import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl6cospbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl6cospbq"/>`,
		"fallback": "noviair:file-code-check",
	});
}

export default Component;
