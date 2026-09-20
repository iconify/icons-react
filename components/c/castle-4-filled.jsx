import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf3wfqbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf3wfqbzt"/>`,
		"fallback": "tdesign:castle-4-filled",
	});
}

export default Component;
