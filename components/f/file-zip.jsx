import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyao45bgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyao45bgc"/>`,
		"fallback": "noviair:file-zip",
	});
}

export default Component;
