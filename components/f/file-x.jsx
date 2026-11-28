import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg_s41kyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg_s41kyu"/>`,
		"fallback": "noviair:file-x",
	});
}

export default Component;
