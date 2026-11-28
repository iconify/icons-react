import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izz6ghbhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izz6ghbhp"/>`,
		"fallback": "noviair:file-code-lock",
	});
}

export default Component;
