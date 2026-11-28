import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u177z4tmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u177z4tmw"/>`,
		"fallback": "noviair:file-text-plus",
	});
}

export default Component;
